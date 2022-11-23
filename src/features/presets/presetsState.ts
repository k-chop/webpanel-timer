import { arrayMove } from "@dnd-kit/sortable"
import { atom, useRecoilCallback, useRecoilValue } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export type TimerPreset = {
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
  removePreset: useRecoilCallback(
    ({ set }) =>
      (id: string) =>
        set(timerPresetsState, (prev) => {
          return prev.filter((preset) => preset.id !== id)
        }),
    []
  ),
  reorderPresetOrder: useRecoilCallback(
    ({ set }) =>
      (from: string, to: string) =>
        set(timerPresetsState, (prev) => {
          const fromIdx = prev.findIndex((t) => t.id === from)
          const toIdx = prev.findIndex((t) => t.id === to)
          return arrayMove(prev, fromIdx, toIdx)
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
