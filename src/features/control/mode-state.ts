import { atom, useRecoilCallback, useRecoilValue } from "recoil"

type Mode = "timer" | "edit"

const modeState = atom<Mode>({
  key: "Mode",
  default: "timer",
})

export const useMode = () => ({
  mode: useRecoilValue(modeState),
})

export const useModeUpdater = () => ({
  toggleMode: useRecoilCallback(
    ({ set }) =>
      () =>
        set(modeState, (prev) => (prev === "edit" ? "timer" : "edit")),
    []
  ),
  setMode: useRecoilCallback(
    ({ set }) =>
      (mode: Mode) =>
        set(modeState, mode),
    []
  ),
})
