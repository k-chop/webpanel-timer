import { useState } from "react"
import styles from "./ringtone.module.scss"
import { useYoutubeId, useYoutubeIdUpdator } from "./youtube-id-state"
import { RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const RingToneEdit = () => {
  const { youtubeId } = useYoutubeId()
  const { setYoutubeId } = useYoutubeIdUpdator()

  const [text, setText] = useState(youtubeId)

  const updateYoutubeId = (id: string) => {
    setYoutubeId(id)
  }

  return (
    <div className={styles.wrapper}>
      <div className="flex w-full max-w-sm flex-col space-x-2">
        <Label htmlFor="youtube-id" className="mb-2">
          Youtube video id
        </Label>
        <div className="flex max-w-sm items-center">
          <Input
            type="url"
            defaultValue={youtubeId}
            onChange={(ev) => setText(ev.target.value)}
          />
          <Button
            id="youtube-id"
            variant="ghost"
            size="icon"
            onClick={() => updateYoutubeId(text)}
          >
            <RefreshCcw />
          </Button>
        </div>
      </div>
    </div>
  )
}
