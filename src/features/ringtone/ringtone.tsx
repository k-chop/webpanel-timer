import { useEffect } from "react"
import YoutubePlayer from "youtube-player"
import { useTimerState } from "../control/timer-state"
import { useYoutubeId } from "./youtube-id-state"

const player = YoutubePlayer("player", {
  width: 200,
  height: 200,
  playerVars: {
    autoplay: 0,
    loop: 1,
    origin: location.protocol + "//" + location.hostname + "/",
  },
})

export const RingTone = () => {
  const { isTimerCompleted } = useTimerState()
  const { youtubeId } = useYoutubeId()

  useEffect(() => {
    player.loadVideoById(youtubeId)
  }, [youtubeId])

  useEffect(() => {
    if (isTimerCompleted) {
      player.playVideo()
    } else {
      player.stopVideo()
    }
  }, [isTimerCompleted])

  return null
}
