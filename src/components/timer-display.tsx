import { useCallback, useEffect, useState } from "react"
import { usePausedDuration } from "../features/control/paused-duration-state"
import { useTargetTime } from "../features/control/target-time-state"
import {
  useTimerState,
  useTimerStateUpdater,
} from "../features/control/timer-state"
import { useRequestAnimationFrame } from "../hooks/use-raf"
import { useTimerDuration } from "../states/timer-duration-state"
import {
  getFontSizeFromDuration,
  toDisplayMilliSec,
  toDisplaySec,
} from "../util"
import styles from "./timer.module.scss"
import { useCompleteTimer } from "./use-complete-timer"
import { useDisplayTime } from "./use-display-time"

function TimerDisplay() {
  const { targetTime } = useTargetTime()
  const { timerState } = useTimerState()
  const { timerDuration } = useTimerDuration()

  const [currentDuration, setCurrentDuration] = useState(timerDuration)

  const displayTime = useDisplayTime(currentDuration)
  useCompleteTimer(currentDuration)

  const rafCallback = useCallback(() => {
    setCurrentDuration(targetTime - Date.now())
  }, [targetTime])

  useEffect(() => {
    setCurrentDuration(timerDuration)
  }, [timerDuration])

  useRequestAnimationFrame(rafCallback, timerState === "play")

  const fontSize = getFontSizeFromDuration(displayTime)

  return (
    <div className={styles.displayWrapper} style={{ fontSize }}>
      <span className={styles.timerMain}>{toDisplaySec(displayTime)}</span>
      <span className={styles.timerMsec}>
        .{toDisplayMilliSec(displayTime)}
      </span>
    </div>
  )
}

export default TimerDisplay
