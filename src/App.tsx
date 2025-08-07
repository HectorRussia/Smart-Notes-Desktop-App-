import { useState } from 'react';
import './App.css'
import Main from './components/Layouts/Main'
import Sidebar from './components/Layouts/Sidebar'
import Navbar from './components/Layouts/Navbar';
import type { NoteItem } from './components/Notes/Notes';

function App() {
  const [theme, setTheme] = useState("luxury");
  const [notes, setNotes] = useState<NoteItem[]>([]);

  const handleCreateNote = () => {
    const newNote = {
      id: Date.now(),
      title: "โน้ตใหม่",
      content: "เริ่มเขียนโน้ตของคุณที่นี่...",
      tags: [],
      date: new Date().toLocaleString('th-TH', { 
        day: 'numeric', 
        month: 'short', 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
    };
    setNotes([newNote, ...notes]);
  };
     const handleDeleteNote = (id: number) => {
     setNotes(notes.filter(note => note.id !== id));
    };
  return (
    <>
        <div data-theme={theme} className="flex h-screen ">
           <Sidebar onCreateNote={handleCreateNote} notes={notes} onDeleteNote={handleDeleteNote} />
          <div className="flex flex-col w-full">
            <Navbar setTheme={setTheme} currentTheme={theme}/>
            <Main setTheme={setTheme} currentTheme={theme} notes={notes}/>
          </div>
        </div>
    </>
  )
}

export default App
