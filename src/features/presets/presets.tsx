import styles from "./presets.module.scss"
import { usePresets, usePresetsUpdater } from "./presetsState"
import { useEditPresets } from "./use-edit-presets"
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortablePresetListItem } from "./sortablePresetListItem"
import { PlusCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export const Presets = () => {
  const { presets } = usePresets()
  const { save } = useEditPresets()
  const { reorderPresetOrder } = usePresetsUpdater()

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragStart = () => {
    document.body.style.setProperty("cursor", "grabbing")
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over != null && active.id !== over.id) {
      reorderPresetOrder(active.id as string, over.id as string)
    }

    document.body.style.setProperty("cursor", "")
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.wrapper}>
        <ul>
          <Separator />
          <li className="flex items-center">
            <Button variant="ghost" className="flex-grow" onClick={save}>
              <PlusCircle />
            </Button>
          </li>
          <Separator />
          <SortableContext
            items={presets}
            strategy={verticalListSortingStrategy}
          >
            {presets.map((preset) => (
              <SortablePresetListItem key={preset.id} preset={preset} />
            ))}
          </SortableContext>
          <DragOverlay dropAnimation={null}>
            <li />
          </DragOverlay>
        </ul>
      </div>
    </DndContext>
  )
}
