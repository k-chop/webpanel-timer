import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import styles from "./presets.module.scss"
import { toDisplaySec } from "../../util"
import { TimerPreset, usePresetsUpdater } from "./presetsState"
import { useEditPresets } from "./use-edit-presets"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SortablePresetListItemProps {
  preset: TimerPreset
}

export const SortablePresetListItem = ({
  preset,
}: SortablePresetListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: preset.id,
    })

  const { removePreset } = usePresetsUpdater()
  const { apply } = useEditPresets()

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <ListItem
      ref={setNodeRef}
      divider
      secondaryAction={
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removePreset(preset.id)}
        >
          <Trash2 />
        </Button>
      }
      {...attributes}
      style={style}
    >
      <div {...listeners}>
        <GripHorizontal className={styles.draggable} />
      </div>
      <ListItemButton
        onClick={() => apply(preset.id)}
        sx={{ textAlign: "center", fontSize: "large" }}
      >
        <ListItemText>{toDisplaySec(preset.duration)}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
