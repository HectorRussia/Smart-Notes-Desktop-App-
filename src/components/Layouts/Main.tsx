import { Eye, Pencil } from "lucide-react"
import Theme, { type ThemeProps } from "../Theme"

const Main = ({setTheme} : ThemeProps) => {
  return (
    <>
        <div className="w-3/4 md:w-4/5 lg:w-5/6 h-screen">
            <div className='flex justify-between p-10 pb-0'>
                <h3 className='font-bold'>ยินดีตอนรับสู่ Smart Notes</h3>
                 <Theme setTheme={setTheme}/>
            </div>
             <div className='flex justify-between p-10 pt-0 pb-0 mt-4'>
                <h3 className='font-medium text-gray-600'>สร้าง: 15 มกราคม 2567 เวลา 07:00 บันทึกล่าสุด: 15 มกราคม 2567 เวลา 07:00</h3>
                <div className="flex items-center gap-2">
                    <div>tage1</div>
                    <div>tage2</div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex justify-evenly items-center gap-x-5 h-10 w-[200px] ml-10 bg-gray-800 mt-4 px-2 rounded-md">
                    <div className="flex  gap-2 cursor-pointer">
                        <div><Pencil /></div>
                        <div>แก้ไข</div>
                    </div>
                    <div className="flex  gap-2 cursor-pointer">
                        <div><Eye /></div>
                        <div>ดูตัวอย่าง</div>
                    </div>
                </div>
                <div className="border-t border-gray-500 mt-5"></div>
            </div>
        </div>
    </>
  )
}

export default Main