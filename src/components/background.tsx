import styles from "./background.module.scss"
import { useTimerState } from "../features/control/timer-state"

export const Background = () => {
  const { isTimerCompleted } = useTimerState()

  return <div className={isTimerCompleted ? styles.bg : ""}></div>
}
