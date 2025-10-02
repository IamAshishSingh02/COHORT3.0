import { useRef } from "react"

export const useDebounce = (originalFn) => {
  const currentClock = useRef()

  const requestTimer = () => {
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalFn, 200)
  }

  return requestTimer
}