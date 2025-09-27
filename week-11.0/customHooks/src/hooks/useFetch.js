import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  const getPosts = async () => {
    setLoading(true)
    const response = await fetch(url)
    const jsonData = await response.json()
    setPost(jsonData)
    setLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [url])

  return {post, loading}
}