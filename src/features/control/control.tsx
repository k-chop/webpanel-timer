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
import { Button } from "@/components/ui/button"

export const Control = () => {
  const { timerState } = useTimerState()
  const { mode } = useMode()
  const { toggleMode } = useModeUpdater()
  const isInvalidTimer = useIsInvalidTimer()

  const { play, reset } = useControl()

  return (
    <div className="mt-4 flex items-center justify-evenly">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMode}
        disabled={timerState !== "stop" || isInvalidTimer}
      >
        {mode === "edit" ? <CheckCircle size={100} /> : <Pencil size={100} />}
      </Button>
      <Button
        variant="ghost"
        size="icon-md"
        onClick={play}
        disabled={isInvalidTimer}
      >
        {timerState === "play" ? (
          <PauseCircle size={100} />
        ) : timerState === "complete" ? (
          <RotateCcw size={100} />
        ) : (
          <PlayCircle size={100} />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={reset}
        disabled={timerState === "stop"}
      >
        <StopCircle size={100} />
      </Button>
    </div>
  )
}
