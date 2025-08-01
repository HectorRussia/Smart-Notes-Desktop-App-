import { useState } from 'react';
import './App.css'
import Main from './components/Layouts/Main'
import Sidebar from './components/Layouts/Sidebar'
import Navbar from './components/Layouts/Navbar';

function App() {
  const [theme, setTheme] = useState("luxury");
  return (
    <>
        <div data-theme={theme} className="flex h-screen ">
          <Sidebar/>
          <div className="flex flex-col w-full">
            <Navbar setTheme={setTheme} currentTheme={theme}/>
            <Main setTheme={setTheme} currentTheme={theme}/>
          </div>
        </div>
    </>
  )
}

export default App
