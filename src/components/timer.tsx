import TimerDisplay from "./timer-display"
import { TimerEdit } from "./timer-edit"
import { useMode } from "../features/control/mode-state"

export const Timer = () => {
  const { mode } = useMode()

  return (
    <div className="mt-2 h-[50vw] text-center transition-[font-size] duration-300">
      {mode === "timer" ? <TimerDisplay /> : <TimerEdit />}
    </div>
  )
}
