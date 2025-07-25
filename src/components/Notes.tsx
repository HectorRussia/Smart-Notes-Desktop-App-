const Notes = () => {
  return (
    <>
        <div className="flex flex-col h-screen mt-2 overflow-y-auto">
           <div className="group bg-gray-600 p-5 mx-2 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#746f5a] hover:text-black">
            <div className="flex items-center justify-between">
                <div>ยินดีต้อนรับสู่ Smart Notes</div>
                {/* จะแสดงเมื่อ hover กล่องใหญ่ */}
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
            </div>
        </div>
    </>
  )
}

export default Notes