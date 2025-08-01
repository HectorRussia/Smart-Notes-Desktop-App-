import { type ThemeProps } from "../Theme"
import { WriteWatch } from "../WriteWatch/WriteWatch"

const Main = ({setTheme,currentTheme} : ThemeProps) => {
  return (
    <>
        <div className="h-screen">
          <WriteWatch setTheme={setTheme} currentTheme={currentTheme}/>
        </div>
    </>
  )
}

export default Main