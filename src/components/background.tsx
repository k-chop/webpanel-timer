import clsx from "clsx"
import { useTimerState } from "../features/control/timer-state"

const backgroundGradientClass = clsx(
  "pointer-events-none absolute left-0 top-0 -z-10",
  "h-full w-full",
  "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
)

export const Background = () => {
  const { isTimerCompleted } = useTimerState()

  return (
    <div className={clsx(isTimerCompleted && backgroundGradientClass)}></div>
  )
}
