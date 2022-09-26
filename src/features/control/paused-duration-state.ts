import { atom, useRecoilCallback, useRecoilValue } from "recoil"

const pausedDurationState = atom({
  key: "PausedDurationState",
  default: 0,
})

export const usePausedDuration = () => ({
  pausedDuration: useRecoilValue(pausedDurationState),
})

export const usePausedDurationUpdater = () => ({
  setPausedDurationFromNow: useRecoilCallback(
    ({ set }) =>
      (time: number) =>
        set(pausedDurationState, time - Date.now()),
    []
  ),
})
