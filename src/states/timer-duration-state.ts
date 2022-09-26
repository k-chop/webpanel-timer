import { atom, useRecoilCallback, useRecoilValue } from "recoil"

const timerDurationState = atom({
  key: "TimerDurationState",
  default: 60_000,
})

export const useTimerDuration = () => ({
  timerDuration: useRecoilValue(timerDurationState),
})

export const useTimerDurationUpdater = () => ({
  setCurrentDuration: useRecoilCallback(
    ({ set }) =>
      (duration: number) =>
        set(timerDurationState, duration),
    []
  ),
})
