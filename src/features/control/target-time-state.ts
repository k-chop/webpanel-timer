import { atom, useRecoilCallback, useRecoilValue } from "recoil"

const targetTimeState = atom({
  key: "TargetTimeState",
  default: 0,
})

export const useTargetTime = () => ({
  targetTime: useRecoilValue(targetTimeState),
})

export const useTargetTimeUpdater = () => ({
  setTargetTimeFromDuration: useRecoilCallback(
    ({ set }) =>
      (duration: number) =>
        set(targetTimeState, Date.now() + duration),
    []
  ),
  resetTargetTime: useRecoilCallback(
    ({ set }) =>
      () =>
        set(targetTimeState, 0),
    []
  ),
})
