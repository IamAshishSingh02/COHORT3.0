import { useEffect, useRef } from "react"

export const usePrev = (value) => {
  const ref = useRef("undefined")

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}