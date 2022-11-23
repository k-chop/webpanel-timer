import { atom, useRecoilCallback, useRecoilValue } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()
const timerDurationState = atom({
  key: "TimerDurationState",
  default: 60_000,
  effects_UNSTABLE: [persistAtom],
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
