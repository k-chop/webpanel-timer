import { atom, useRecoilCallback, useRecoilValue } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

const youtubeIdState = atom({
  key: "youtubeIdState",
  default: "VDvFcn6icXo",
  effects_UNSTABLE: [persistAtom],
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
