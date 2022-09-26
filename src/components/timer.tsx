import styles from "./timer.module.scss"
import TimerDisplay from "./timer-display"
import { TimerEdit } from "./timer-edit"
import { useMode } from "../features/control/mode-state"

export const Timer = () => {
  const { mode } = useMode()

  return (
    <div className={styles.wrapper}>
      {mode === "timer" ? <TimerDisplay /> : <TimerEdit />}
    </div>
  )
}
