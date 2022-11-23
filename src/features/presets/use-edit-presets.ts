import { useCallback } from "react"
import {
  useTimerDurationUpdater,
  useTimerDuration,
} from "../../states/timer-duration-state"
import { useTimerStateUpdater } from "../control/timer-state"
import { usePresets, usePresetsUpdater } from "./presetsState"
import * as uuid from "uuid"

export const useEditPresets = () => {
  const { presets } = usePresets()
  const { addPreset } = usePresetsUpdater()
  const { setCurrentDuration } = useTimerDurationUpdater()
  const { stopTimer } = useTimerStateUpdater()
  const { timerDuration } = useTimerDuration()

  const apply = useCallback(
    (id: string) => {
      setCurrentDuration(presets.find((preset) => preset.id === id)!.duration)
      stopTimer()
    },
    [presets]
  )

  const save = useCallback(() => {
    addPreset({ id: uuid.v4(), duration: timerDuration })
  }, [timerDuration])

  return { apply, save }
}
