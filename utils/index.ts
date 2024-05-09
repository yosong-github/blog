export function insertYearToPosts(posts: any) {
  let currentYear = -1
  return posts.reduce((posts: any, post: any) => {
    const year = new Date(post.date).getFullYear()
    console.log(year)

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
