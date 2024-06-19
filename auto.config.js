import fs, { readFileSync } from 'fs'
import path from 'path'

import { Client } from 'ssh2'

const conn = new Client()

const localFolderPath = './dist'
const remoteFolderPath = '/home/test'
const host = 'x.x.x.x'
const privateKey = readFileSync('C:\\Users\\xxx\\.ssh\\xxx')
const username = 'root'
const port = '22'

let uploadOkNum = 0
let uploadErrorNum = 0
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
  .then(count => {
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
                sftp.mkdir(remoteFolderPath, true, mkdirErr => {
                  // true 表示如果目录不存在则递归创建
                  if (mkdirErr) {
                    console.error(`文件夹创建失败: ${mkdirErr}`, remoteFolderPath)
                  } else {
                    // 删除完成文件夹并且创建初始化目录后开始
                    uploadDirectory(localFolderPath, remoteFolderPath)
                  }
                })
              })
              .on('data', data => {
                console.log('STDOUT: ' + data)
              })
              .stderr.on('data', data => {
                console.log('STDERR: ' + data)
              })
          })

          // 递归上传文件夹
          function uploadDirectory(localPath, remotePath) {
            fs.readdirSync(localPath).forEach(fileName => {
              const localFilePath = path.join(localPath, fileName)
              const remoteFilePath = path.join(remotePath, fileName)

              if (fs.lstatSync(localFilePath).isDirectory()) {
                let remoteDirPath = remoteFilePath.replace(/\\/g, '/')
                // 创建文件夹
                sftp.mkdir(remoteDirPath, true, mkdirErr => {
                  // true 表示如果目录不存在则递归创建
                  if (mkdirErr) {
                    console.error(`文件夹创建失败: ${mkdirErr}`, remoteDirPath)
                  } else {
                    console.log(`创建文件夹: ${remoteDirPath}`)
                  }
                })

                uploadDirectory(localFilePath, remoteFilePath)
              } else {
                sftp.fastPut(localFilePath, remoteFilePath.replace(/\\/g, '/'), {}, err => {
                  if (err) {
                    console.error(`error ${localFilePath} to error ${remoteFilePath}`)

                    uploadErrorNum++
                  } else {
                    console.log(`Uploaded ${localFilePath} to ${remoteFilePath}`)

                    uploadOkNum++

                    if (uploadOkNum + uploadErrorNum == allFIle) {
                      console.log('上传完成')
                      console.log('上传成功文件数量:', uploadOkNum)
                      console.log('上传失败文件数量:', uploadErrorNum)
                      console.log('文件总数:', allFIle)
                      conn.end()
                    }
                  }
                })
              }
            })
          }
        })
      })
      .connect({
        host,
        port: port,
        username: username,
        privateKey
      })
  })
  .catch(err => {
    console.error('An error occurred:', err)
  })

// example output:
// Client :: ready
// STDOUT:  17:41:15 up 22 days, 18:09,  1 user,  load average: 0.00, 0.01, 0.05
//
// Stream :: exit :: code: 0, signal: undefined
// Stream :: close
