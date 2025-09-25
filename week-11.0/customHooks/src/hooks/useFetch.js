import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [post, setPost] = useState({})

  const getPosts = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setPost(jsonData)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return post
}