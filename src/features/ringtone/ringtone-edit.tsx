import TextField from "@mui/material/TextField"
import { InputAdornment } from "@mui/material"
import { useState } from "react"
import styles from "./ringtone.module.scss"
import { useYoutubeId, useYoutubeIdUpdator } from "./youtube-id-state"
import { RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export const RingToneEdit = () => {
  const { youtubeId } = useYoutubeId()
  const { setYoutubeId } = useYoutubeIdUpdator()

  const [text, setText] = useState(youtubeId)

  const updateYoutubeId = (id: string) => {
    setYoutubeId(id)
  }

  return (
    <div className={styles.wrapper}>
      <TextField
        id="youtube-id"
        label="Youtube video id"
        defaultValue={youtubeId}
        onChange={(ev) => setText(ev.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateYoutubeId(text)}
              >
                <RefreshCcw />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}
