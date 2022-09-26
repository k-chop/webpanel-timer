import { disp, msToHour, msToMin, msToSec, textSizes } from "../util"
import styles from "./timer.module.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useTimerDuration } from "../states/timer-duration-state"
import { useTimerEdit } from "./use-timer-edit"

export const TimerEdit = () => {
  const { timerDuration } = useTimerDuration()
  const { calc, wheel } = useTimerEdit()

  const fontSize = `${textSizes.at(-1)}vw`

  return (
    <div className={styles.editWrapper}>
      <div onClick={() => calc("+", "hour")}>
        <KeyboardArrowUpIcon fontSize="medium" />
      </div>
      <div></div>
      <div onClick={() => calc("+", "minute")}>
        <KeyboardArrowUpIcon fontSize="medium" />
      </div>
      <div></div>
      <div onClick={() => calc("+", "second")}>
        <KeyboardArrowUpIcon fontSize="medium" />
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
        <KeyboardArrowDownIcon fontSize="medium" />
      </div>
      <div></div>
      <div onClick={() => calc("-", "minute")}>
        <KeyboardArrowDownIcon fontSize="medium" />
      </div>
      <div></div>
      <div onClick={() => calc("-", "second")}>
        <KeyboardArrowDownIcon fontSize="medium" />
      </div>
    </div>
  )
}
