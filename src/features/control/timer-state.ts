import { atom, selector, useRecoilCallback, useRecoilValue } from "recoil"

export type TimerState = "play" | "pause" | "stop" | "complete"

const timerState = atom<TimerState>({
  key: "TimerState",
  default: "stop",
})

const isTimerComplete = selector({
  key: "TimerComplete",
  get: ({ get }) => get(timerState) === "complete",
})

export const useTimerState = () => ({
  timerState: useRecoilValue(timerState),
  isTimerCompleted: useRecoilValue(isTimerComplete),
})

export const useTimerStateUpdater = () => ({
  playOrPauseTimer: useRecoilCallback(
    ({ set }) =>
      () =>
        set(timerState, (prev) => (prev === "play" ? "pause" : "play")),
    []
  ),
  stopTimer: useRecoilCallback(
    ({ set }) =>
      () =>
        set(timerState, "stop"),
    []
  ),
  completeTimer: useRecoilCallback(
    ({ set }) =>
      () =>
        set(timerState, "complete"),
    []
  ),
})
