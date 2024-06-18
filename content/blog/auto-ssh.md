---
date: '2024-06-18 17:15:49'
tags:
  - ssh
  - 自动化
  - linux
title: 使用 node+ssh2 实现自动化部署
---

> 部署上线对于大厂的开发者来说可能不算什么事情，他们拥有一套完整的 DevOps。然而对于小厂来说大多数都是开发者自己开发+测试+打包+上线，对于这个过程其实是存在繁琐的，也有不少公司需要打包后将文件给后端大哥进行上线部署，这时候就能体会到前端的卑微了。

<mermaid>
flowchart TB
开发完成打包-->压缩打包的文件夹-->发给后端-->打钱失败-->滚
发给后端-->打钱成功-->后端大哥更改服务器代码
压缩打包的文件夹-->自行打开服务器替换文件
</mermaid>

## ssh

ssh 的主要目的是提供安全的远程访问，防止数据在传输过程中被窃听、篡改或伪造。它通过使用加密算法对通信内容进行加密，包括用户的身份验证信息、传输的数据等，从而保护用户的隐私和数据安全。SSH 通常使用用户名和密码进行身份验证，也可以使用公钥加密技术来实现更高级的身份验证方式。

### win 生成 ssh 密钥

输入 ssh-keygen，然后按下 Enter 键开始生成密钥。一直按 Enter，直至结束。
'Enter file in which to save the key (C:\Users\xxx/.ssh/id_rsa):'密钥保存的位子与名称可以自定义

```bash
ssh-keygen
```

## ssh2

> SSH2 客户端和服务器模块用纯 JavaScript 为 node.js 编写。

[快速链接：https://github.com/mscdex/ssh2](https://github.com/mscdex/ssh2)

## 代码实现

实现了自动删除文件，上传文件，上传文件数量，上传成功与失败数量统计

```js
import fs, { readFileSync } from 'fs'
import path from 'path'
import { Client } from 'ssh2'

const conn = new Client()

const localFolderPath = './dist'
const remoteFolderPath = '/home/test'
const host = 'x.x.x.x'
const privateKey = readFileSync('C:\\Users\\xxxx\\.ssh\\xxxx') // ssh私钥地址
const username = 'root'

// 上传完成数量
let uploadOkNum = 0
// 上传失败数量
let uploadErrorNum = 0
// 文件总数
let allFIle = 0

// 异步递归获取文件夹下所有文件总数
async function getFilesCount(dir) {
  let count = 0
  try {
    const files = await fs.promises.readdir(dir, { withFileTypes: true })
    for (const file of files) {
      const res = path.resolve(dir, file.name)
      if (file.isDirectory()) {
        // 如果是文件夹，递归调用自身
        count += await getFilesCount(res)
      } else {
        // 如果是文件，则计数加一
        count++
      }
    }
    return count
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err)
    return 0
  }
}

// 调用函数并打印结果
getFilesCount(localFolderPath)
  .then((count) => {
    console.log(`读取到的文件数量为: ${count}`)
    allFIle = count
    conn
      .on('ready', () => {
        console.log('Client :: ready')
        conn.sftp((err, sftp) => {
          if (err) {
            throw err
          }

          // 先删除文件夹 -rf后面必须要空格
          conn.exec('rm -rf ' + remoteFolderPath, (err, stream) => {
            if (err) throw err
            stream
              .on('close', (code, signal) => {
                console.log('文件夹删除完成')
                sftp.mkdir(remoteFolderPath, true, (mkdirErr) => {
                  // true 表示如果目录不存在则递归创建
                  if (mkdirErr) {
                    console.error(
                      `文件夹创建失败: ${mkdirErr}`,
                      remoteFolderPath
                    )
                  } else {
                    // 删除完成文件夹并且创建初始化目录后开始
                    uploadDirectory(localFolderPath, remoteFolderPath)
                  }
                })
              })
              .on('data', (data) => {
                console.log('STDOUT: ' + data)
              })
              .stderr.on('data', (data) => {
                console.log('STDERR: ' + data)
              })
          })

          // 递归上传文件夹
          function uploadDirectory(localPath, remotePath) {
            fs.readdirSync(localPath).forEach((fileName) => {
              const localFilePath = path.join(localPath, fileName)
              const remoteFilePath = path.join(remotePath, fileName)

              if (fs.lstatSync(localFilePath).isDirectory()) {
                let remoteDirPath = remoteFilePath.replace(/\\/g, '/')
                // 创建文件夹
                sftp.mkdir(remoteDirPath, true, (mkdirErr) => {
                  // true 表示如果目录不存在则递归创建
                  if (mkdirErr) {
                    console.error(`文件夹创建失败: ${mkdirErr}`, remoteDirPath)
                  } else {
                    console.log(`创建文件夹: ${remoteDirPath}`)
                  }
                })

                uploadDirectory(localFilePath, remoteFilePath)
              } else {
                sftp.fastPut(
                  localFilePath,
                  remoteFilePath.replace(/\\/g, '/'),
                  {},
                  (err) => {
                    if (err) {
                      console.error(
                        `error ${localFilePath} to error ${remoteFilePath}`
                      )

                      uploadErrorNum++
                    } else {
                      console.log(
                        `Uploaded ${localFilePath} to ${remoteFilePath}`
                      )

                      uploadOkNum++

                      if (uploadOkNum + uploadErrorNum == allFIle) {
                        console.log('上传完成')
                        console.log('上传成功文件数量:', uploadOkNum)
                        console.log('上传失败文件数量:', uploadErrorNum)
                        console.log('文件总数:', allFIle)
                        conn.end()
                      }
                    }
                  }
                )
              }
            })
          }
        })
      })
      .connect({
        host,
        port: port || 22,
        username: username || 'root',
        privateKey,
      })
  })
  .catch((err) => {
    console.error('An error occurred:', err)
  })

// example output:
// Client :: ready
// STDOUT:  17:41:15 up 22 days, 18:09,  1 user,  load average: 0.00, 0.01, 0.05
//
// Stream :: exit :: code: 0, signal: undefined
// Stream :: close
```

## 总结

在现在的前端工程化的时代，我们可以通过修改 package.json 的 script 实现在打包完成后自动上传到服务器

```js
  "scripts": {
    ...
    "build-auto": "nuxt build && node auto.config.js",
    ...
  },
```

至此我们就能实现一个简单的实现自动化部署，当然如果公司实力允许还是推荐使用正规的开发流程进行自动化部署，
市面上也有许多自动化的工具比如：

- Jenkins
- GitLab
- AWS CodeDeploy
- cloudflare
- ...
