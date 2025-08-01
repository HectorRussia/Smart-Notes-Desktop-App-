import { useState } from 'react';
import './App.css'
import Main from './components/Layouts/Main'
import Sidebar from './components/Layouts/Sidebar'

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
