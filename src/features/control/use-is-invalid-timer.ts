import { useTimerDuration } from "../../states/timer-duration-state"

export const useIsInvalidTimer = () => {
  const { timerDuration } = useTimerDuration()

  return timerDuration === 0
}
