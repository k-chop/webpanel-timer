import { atom, selector, useRecoilCallback, useRecoilValue } from "recoil"

type TimerPreset = {
  duration: number
  youtubeVideoId?: string
}

const timerPresetsState = atom<TimerPreset[]>({
  key: "timerPresetsState",
  default: [
    { duration: 60000 },
    { duration: 180000 },
    { duration: 5000 },
    { duration: 60000000 },
  ],
})

export const usePresets = () => ({
  presets: useRecoilValue(timerPresetsState),
})

export const usePresetsUpdater = () => ({
  removePresetAt: useRecoilCallback(
    ({ set }) =>
      (idx: number) =>
        set(timerPresetsState, (prev) => {
          const next = [...prev]
          next.splice(idx, 1)
          return next
        }),
    []
  ),
  addPreset: useRecoilCallback(
    ({ set }) =>
      (newPreset: TimerPreset) =>
        set(timerPresetsState, (prev) => [...prev, { ...newPreset }]),
    []
  ),
})
