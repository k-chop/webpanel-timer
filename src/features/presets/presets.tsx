import { toDisplaySec } from "../../util"
import styles from "./presets.module.scss"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { usePresets, usePresetsUpdater } from "./presetsState"
import { useEditPresets } from "./use-edit-presets"

export const Presets = () => {
  const { presets } = usePresets()
  const { removePresetAt } = usePresetsUpdater()

  const { apply, save } = useEditPresets()

  return (
    <div className={styles.wrapper}>
      <List dense>
        <Divider />
        <ListItem divider>
          <ListItemButton onClick={save} sx={{ justifyContent: "center" }}>
            <AddCircleOutlineIcon />
          </ListItemButton>
        </ListItem>
        {presets.map((preset, idx) => (
          <ListItem
            key={idx}
            divider
            secondaryAction={
              <IconButton onClick={() => removePresetAt(idx)}>
                <DeleteForeverIcon />
              </IconButton>
            }
          >
            <ListItemButton
              onClick={() => apply(idx)}
              sx={{ textAlign: "center", fontSize: "large" }}
            >
              <ListItemText>{toDisplaySec(preset.duration)}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
