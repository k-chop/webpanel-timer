import { ThemeProvider } from "@mui/system"
import { Background } from "./components/background"
import { Control } from "./features/control/control"
import { RingToneEdit } from "./features/ringtone/ringtone-edit"
import { Presets } from "./features/presets/presets"
import { RingTone } from "./features/ringtone/ringtone"
import { Timer } from "./components/timer"
import { theme } from "./theme"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Timer />
        <Control />
        <Presets />
        <RingToneEdit />
        <RingTone />
        <Background />
      </ThemeProvider>
    </div>
  )
}

export default App
