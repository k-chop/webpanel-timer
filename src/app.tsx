import { Background } from "./components/background"
import { Control } from "./features/control/control"
import { RingToneEdit } from "./features/ringtone/ringtone-edit"
import { Presets } from "./features/presets/presets"
import { RingTone } from "./features/ringtone/ringtone"
import { Timer } from "./components/timer"

function App() {
  return (
    <div>
      <Timer />
      <Control />
      <Presets />
      <RingToneEdit />
      <RingTone />
      <Background />
    </div>
  )
}

export default App
