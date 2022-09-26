import { atom, useRecoilCallback, useRecoilValue } from "recoil"

const youtubeIdState = atom({
  key: "youtubeIdState",
  default: "VDvFcn6icXo",
})

export const useYoutubeId = () => ({
  youtubeId: useRecoilValue(youtubeIdState),
})

export const useYoutubeIdUpdator = () => ({
  setYoutubeId: useRecoilCallback(
    ({ set }) =>
      (newId: string) =>
        set(youtubeIdState, newId),
    []
  ),
})
