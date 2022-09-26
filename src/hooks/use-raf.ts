import { useCallback, useEffect, useRef } from "react"

const FRAMERATE = 10
const FRAMERATE_MS = 1000 / FRAMERATE

export const useRequestAnimationFrame = (
  callback: () => void,
  enabled = true
) => {
  const prev = useRef<number>()
  const requestId = useRef<number>(0)

  const f: FrameRequestCallback = useCallback(
    (time) => {
      const elapse = time - (prev.current ?? Number.MIN_SAFE_INTEGER)

      if (FRAMERATE_MS < elapse) {
        prev.current = time
        callback()
      }
      requestId.current = requestAnimationFrame(f)
    },
    [callback]
  )

  useEffect(() => {
    if (enabled) {
      requestId.current = requestAnimationFrame(f)
    }

    return () => {
      if (enabled) {
        cancelAnimationFrame(requestId.current)
      }
    }
  }, [f, enabled])
}
