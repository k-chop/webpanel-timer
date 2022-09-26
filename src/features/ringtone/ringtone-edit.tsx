import TextField from "@mui/material/TextField"
import RefreshIcon from "@mui/icons-material/Refresh"
import { IconButton, InputAdornment } from "@mui/material"
import { useState } from "react"
import styles from "./ringtone.module.scss"
import { useYoutubeId, useYoutubeIdUpdator } from "./youtube-id-state"

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
              <IconButton onClick={() => updateYoutubeId(text)}>
                <RefreshIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}
