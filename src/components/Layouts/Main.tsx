import { type ThemeProps } from "../Theme"
import type { noteProps } from "../WriteWatch/WriteNote"
import { WriteWatch } from "../WriteWatch/WriteWatch"
interface MainProps extends ThemeProps {
    notes: noteProps[]
}

const Main = ({setTheme, currentTheme, notes}: MainProps) => {
  // const latestNote = notes[0]; // ดึงโน้ตล่าสุด

  return (
    <>
        <div className="h-screen">
          <WriteWatch setTheme={setTheme} currentTheme={currentTheme} notes={notes}/>
        </div>
    </>
  )
}

export default Main