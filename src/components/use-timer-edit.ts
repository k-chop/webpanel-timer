import { useCallback, WheelEventHandler } from "react"
import {
  useTimerDuration,
  useTimerDurationUpdater,
} from "../states/timer-duration-state"
import { unitMS, msToHour, msToMin, msToSec, hmsToMS } from "../util"

export const useTimerEdit = () => {
  const { timerDuration } = useTimerDuration()
  const { setCurrentDuration } = useTimerDurationUpdater()

  const calc = useCallback(
    (op: "+" | "-", unit: keyof typeof unitMS) => {
      const ms = timerDuration

      let h = msToHour(ms)
      let m = msToMin(ms)
      let s = msToSec(ms)

      const isSub = op === "-"

      switch (unit) {
        case "hour": {
          h = (h + (isSub ? -1 : 1) + 100) % 100
          break
        }
        case "minute": {
          m = (m + (isSub ? -1 : 1) + 60) % 60
          break
        }
        case "second": {
          s = (s + (isSub ? -1 : 1) + 60) % 60
          break
        }
      }

      setCurrentDuration(hmsToMS(h, m, s))
    },
    [timerDuration]
  )

  const wheel: (unit: keyof typeof unitMS) => WheelEventHandler = useCallback(
    (unit) => (event) => {
      const op = event.deltaY > 0 ? "-" : "+"
      calc(op, unit)
    },
    [calc]
  )

  return { calc, wheel }
}
