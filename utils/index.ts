/*
 * @Author: yosong
 * @Date: 2024-05-09 14:03:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 11:08:08
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

export async function getIncludedYearPosts(dirName: string) {
  // 通过时间排序
  const result = await queryContent(dirName).sort({ date: -1 }).find()
  return result
}
