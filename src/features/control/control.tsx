import styles from "./control.module.scss"
import IconButton from "@mui/material/IconButton"
import { useTimerState } from "./timer-state"
import { useMode, useModeUpdater } from "./mode-state"
import { useControl } from "./use-control"
import { useIsInvalidTimer } from "./use-is-invalid-timer"
import {
  CheckCircle,
  PauseCircle,
  Pencil,
  PlayCircle,
  RotateCcw,
  StopCircle,
} from "lucide-react"

export const Control = () => {
  const { timerState } = useTimerState()
  const { mode } = useMode()
  const { toggleMode } = useModeUpdater()
  const isInvalidTimer = useIsInvalidTimer()

  const { play, reset } = useControl()

  return (
    <div className={styles.wrapper}>
      <IconButton
        onClick={toggleMode}
        disabled={timerState !== "stop" || isInvalidTimer}
      >
        {mode === "edit" ? <CheckCircle size={32} /> : <Pencil size={32} />}
      </IconButton>
      <IconButton onClick={play} disabled={isInvalidTimer}>
        {timerState === "play" ? (
          <PauseCircle size={48} />
        ) : timerState === "complete" ? (
          <RotateCcw size={48} />
        ) : (
          <PlayCircle size={48} />
        )}
      </IconButton>
      <IconButton onClick={reset} disabled={timerState === "stop"}>
        <StopCircle size={32} />
      </IconButton>
    </div>
  )
}
