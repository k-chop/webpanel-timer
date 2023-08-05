import { disp, msToHour, msToMin, msToSec, textSizes } from "../util"
import { useTimerDuration } from "../states/timer-duration-state"
import { useTimerEdit } from "./use-timer-edit"
import { ChevronDown, ChevronUp } from "lucide-react"

export const TimerEdit = () => {
  const { timerDuration } = useTimerDuration()
  const { calc, wheel } = useTimerEdit()

  const fontSize = `${textSizes.at(-1)}vw`

  return (
    <div className="grid grid-cols-[1fr_0.2fr_1fr_0.2fr_1fr] place-items-center">
      <div onClick={() => calc("+", "hour")}>
        <ChevronUp />
      </div>
      <div></div>
      <div onClick={() => calc("+", "minute")}>
        <ChevronUp />
      </div>
      <div></div>
      <div onClick={() => calc("+", "second")}>
        <ChevronUp />
      </div>
      <div style={{ fontSize }} onWheel={wheel("hour")}>
        {disp(msToHour(timerDuration), true)}
      </div>
      <div style={{ fontSize }}>:</div>
      <div style={{ fontSize }} onWheel={wheel("minute")}>
        {disp(msToMin(timerDuration), true)}
      </div>
      <div style={{ fontSize }}>:</div>
      <div style={{ fontSize }} onWheel={wheel("second")}>
        {disp(msToSec(timerDuration), true)}
      </div>
      <div onClick={() => calc("-", "hour")}>
        <ChevronDown />
      </div>
      <div></div>
      <div onClick={() => calc("-", "minute")}>
        <ChevronDown />
      </div>
      <div></div>
      <div onClick={() => calc("-", "second")}>
        <ChevronDown />
      </div>
    </div>
  )
}
