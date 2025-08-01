import Theme, { type ThemeProps } from "../Theme"
import { WriteWatch } from "../WriteWatch/WriteWatch"

const Main = ({setTheme,currentTheme} : ThemeProps) => {
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
           <WriteWatch setTheme={setTheme} currentTheme={currentTheme}/>
        </div>
    </>
  )
}

export default Main