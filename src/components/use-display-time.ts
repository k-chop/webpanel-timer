import { usePausedDuration } from "../features/control/paused-duration-state"
import { useTimerState } from "../features/control/timer-state"
import { useTimerDuration } from "../states/timer-duration-state"

export const useDisplayTime = (currentDuration: number) => {
  const { timerState } = useTimerState()
  const { pausedDuration } = usePausedDuration()
  const { timerDuration } = useTimerDuration()

  return timerState === "play"
    ? currentDuration
    : timerState === "stop" || timerState === "complete"
    ? timerDuration
    : pausedDuration
}
