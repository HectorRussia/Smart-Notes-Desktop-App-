const notes = [{
    id: 1,
    title: "ยินดีต้อนรับสู่ Smart Notes",
    content: "ยินดีต้อนรับสู่ Smart Notes! 🎉 เริ่มต้นใช้งาน Smart Notes เป็นแอปจดโน้ตที่รองรับ",
    tags: ["tag1", "tag2"],
    date: "15 มค 07:00 น",
},
{
    id: 2,
    title: "การใช้งาน Markdown",
    content: "Smart Notes รองรับ Markdown เต็มรูปแบบ ทำให้คุณสามารถเขียน",
    tags: ["markdown", "writing"],
    date: "16 มค 08:30 น",
},
{
    id: 3,
    title: "การจัดระเบียบโน้ต",
    content: "คุณสามารถจัดระเบียบโน้ตด้วย Folder และ Tag เพื่อให้การค้นหาโน้ตได้อย่างรวดเร็ว",
    tags: ["organization", "folders"],    
    date: "17 มค 09:15 น",
},
{
    id: 4,
    title: "การค้นหาโน้ต",
    content: "Smart Notes มีระบบค้นหาโน้ตที่รวดเร็วและแม่นยำ ทำให้คุณสามารถค้นหาโน้ตที่ต้องการได้อย่างง่ายดาย",
    tags: ["search", "notes"],
    date: "18 มค 10:00 น",
},
{
    id: 5,
    title: "การบันทึกอัตโนมัติ",
    content: "Smart Notes มีระบบ Auto-save อัตโนมัติ ทำให้คุณไม่ต้องกังวลเรื่องการสูญหายของข้อมูล",
    tags: ["autosave", "data"],
    date: "19 มค 11:45 น",
}
    
]

const Notes = () => {

  return (
    <>
        <div className="flex flex-col h-screen mt-2 overflow-y-auto">
            {notes.map((note) => (
            <div key={note.id} className="group bg-gray-600 p-5 mt-2 mx-2 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#746f5a] hover:text-black">
                <div className="flex items-center justify-between">
                    <div>{note.title}</div>
                    {/* จะแสดงเมื่อ hover กล่องใหญ่ */}
                    <div className="hidden group-hover:block text-white text-md rounded">...</div>
                </div>
                <div className="text-sm text-gray-300">{note.content}</div>
                <div className="flex items-center gap-2 mt-2">
                    {note.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-500 text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
                <div className="mt-2">{note.date}</div>
            </div>
            ))}
          {/*  <div className="group bg-gray-600 p-5 mx-2 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#746f5a] hover:text-black">
            <div className="flex items-center justify-between">
                <div>ยินดีต้อนรับสู่ Smart Notes</div>
                จะแสดงเมื่อ hover กล่องใหญ่
                <div className="hidden group-hover:block text-white text-md rounded">...</div>
            </div>
            <div className="text-sm text-gray-300">
                ยินดีต้อนรับสู่ Smart Notes! 🎉 เริ่มต้นใช้งาน Smart Notes เป็นแอปจดโน้ตที่รองรับ
            </div>
            <div className="flex items-center gap-2 mt-2">
                <div>tag1</div>
                <div>tag2</div>
            </div>
            <div className="mt-2">15 มค 07:00 น</div>
            </div> */}
        </div>
    </>
  )
}

export default Notes