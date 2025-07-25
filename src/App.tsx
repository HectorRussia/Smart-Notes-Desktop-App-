import './App.css'
import Sidebar from './components/Sidebar'

function App() {
 
  return (
    <>
        <div className="flex h-screen ">
            <Sidebar/>
            <div className="bg-[#181c25] w-3/4 md:w-4/5 lg:w-5/6 h-screen">Main</div>
        </div>
    </>
  )
}

export default App
