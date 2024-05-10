import type { ParsedContent } from '@nuxt/content/types'

/*
 * @Author: yosong
 * @Date: 2024-05-09 14:03:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 14:40:15
 * @FilePath: \blog\utils\index.ts
 */
export function insertYearToPosts(posts: any) {
  let currentYear = -1
  return posts.reduce((posts: any, post: any) => {
    const year = new Date(post.date).getFullYear()

    if (year !== currentYear && !isNaN(year)) {
      posts.push({
        isMarked: true,
        year,
      })
      currentYear = year
    }
    posts.push(post)
    return posts
  }, [])
}

export function getClassifyPosts(posts: ParsedContent[]) {
  let list: {
    [key: string]: ParsedContent[]
  } = {}

  posts.map((it) => {
    if (!!it._dir) {
      if (!list[it._dir]) {
        list[it._dir] = []
      }
      list[it._dir].push(it)
    }
  })

  console.log(list)

  return list
}

export async function getPosts(dirName: string) {
  // 通过时间排序
  const result = await queryContent(dirName).sort({ date: -1 }).find()
  const classifyPosts = getClassifyPosts(result)
  return classifyPosts
}
