import { useState } from 'react';
import './App.css'
import Main from './components/main'
import Sidebar from './components/Sidebar'

function App() {
  const [theme, setTheme] = useState("luxury");
  return (
    <>
        <div data-theme={theme} className="flex h-screen ">
          <Sidebar/>
          <Main setTheme={setTheme}/>
        </div>
    </>
  )
}

export default App
