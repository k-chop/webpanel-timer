import { useCallback, useEffect, useState } from "react"
import { useTargetTime } from "../features/control/target-time-state"
import { useTimerState } from "../features/control/timer-state"
import { useRequestAnimationFrame } from "../hooks/use-raf"
import { useTimerDuration } from "../states/timer-duration-state"
import {
  getFontSizeFromDuration,
  toDisplayMilliSec,
  toDisplaySec,
} from "../util"
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
    <div className="leading-[50vw]" style={{ fontSize }}>
      <span>{toDisplaySec(displayTime)}</span>
      <span className="text-[20%]">.{toDisplayMilliSec(displayTime)}</span>
    </div>
  )
}

export default TimerDisplay
