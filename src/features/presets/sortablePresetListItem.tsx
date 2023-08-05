import styles from "./presets.module.scss"
import { toDisplaySec } from "../../util"
import { TimerPreset, usePresetsUpdater } from "./presetsState"
import { useEditPresets } from "./use-edit-presets"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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
    <>
      <li
        ref={setNodeRef}
        {...attributes}
        style={style}
        className="flex items-center"
      >
        <div {...listeners}>
          <GripHorizontal className={styles.draggable} />
        </div>
        <div className="flex flex-grow">
          <Button
            variant="ghost"
            className="flex-grow"
            onClick={() => apply(preset.id)}
          >
            {toDisplaySec(preset.duration)}
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removePreset(preset.id)}
        >
          <Trash2 />
        </Button>
      </li>
      <Separator />
    </>
  )
}
