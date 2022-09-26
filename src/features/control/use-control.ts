import { useCallback } from "react"
import { useTimerDuration } from "../../states/timer-duration-state"
import { useModeUpdater } from "./mode-state"
import {
  usePausedDuration,
  usePausedDurationUpdater,
} from "./paused-duration-state"
import { useTargetTime, useTargetTimeUpdater } from "./target-time-state"
import { useTimerState, useTimerStateUpdater } from "./timer-state"

export const useControl = () => {
  const { timerState } = useTimerState()
  const { setPausedDurationFromNow } = usePausedDurationUpdater()
  const { targetTime } = useTargetTime()
  const { pausedDuration } = usePausedDuration()
  const { setTargetTimeFromDuration, resetTargetTime } = useTargetTimeUpdater()
  const { setMode } = useModeUpdater()
  const { timerDuration } = useTimerDuration()
  const { playOrPauseTimer, stopTimer } = useTimerStateUpdater()

  const play = useCallback(() => {
    switch (timerState) {
      case "play": // pause
        setPausedDurationFromNow(targetTime)
        break
      case "pause": // restart
        setTargetTimeFromDuration(pausedDuration)
        break
      case "complete": // start
      case "stop":
        setMode("timer")
        setTargetTimeFromDuration(timerDuration)
        break
    }
    playOrPauseTimer()
  }, [timerState, targetTime, pausedDuration, timerDuration])

  const reset = useCallback(() => {
    stopTimer()
    resetTargetTime()
  }, [])

  return { play, reset }
}
