import { atom, useRecoilCallback, useRecoilValue } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

type TimerPreset = {
  id: string
  duration: number
  youtubeVideoId?: string
}

const timerPresetsState = atom<TimerPreset[]>({
  key: "timerPresetsState",
  default: [],
  effects_UNSTABLE: [persistAtom],
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
