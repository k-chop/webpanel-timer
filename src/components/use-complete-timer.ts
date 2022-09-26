import { useEffect } from "react"
import { useTimerStateUpdater } from "../features/control/timer-state"

export const useCompleteTimer = (currentDuration: number) => {
  const { completeTimer } = useTimerStateUpdater()

  const isOver = currentDuration <= 0

  useEffect(() => {
    if (isOver) {
      completeTimer()
    }
  }, [isOver])
}
