import styles from "./control.module.scss"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline"
import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined"
import ReplayIcon from "@mui/icons-material/Replay"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import { useTimerState } from "./timer-state"
import { useMode, useModeUpdater } from "./mode-state"
import { useControl } from "./use-control"
import { useIsInvalidTimer } from "./use-is-invalid-timer"

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
        {mode === "edit" ? (
          <CheckCircleOutlineOutlinedIcon fontSize="large" />
        ) : (
          <EditIcon fontSize="large" />
        )}
      </IconButton>
      <IconButton onClick={play} disabled={isInvalidTimer}>
        {timerState === "play" ? (
          <PauseCircleOutlineIcon sx={{ fontSize: "4rem" }} />
        ) : timerState === "complete" ? (
          <ReplayIcon sx={{ fontSize: "4rem" }} />
        ) : (
          <PlayCircleOutlineIcon sx={{ fontSize: "4rem" }} />
        )}
      </IconButton>
      <IconButton onClick={reset} disabled={timerState === "stop"}>
        <StopCircleOutlinedIcon fontSize="large" />
      </IconButton>
    </div>
  )
}
