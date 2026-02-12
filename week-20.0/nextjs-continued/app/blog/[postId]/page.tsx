import axios from "axios"

export default async function BlogPage({params}: {params: {postId: string}}){

  const postId = (await params).postId
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = response.data

  return (
    <div>
      Blog Page {postId}
      <br /><br />
      Title: {data.title}
      <br /><br />
      Body: {data.body}
    </div>
  )
}