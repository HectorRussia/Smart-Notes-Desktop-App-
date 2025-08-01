import type { ThemeProps } from '../Theme'
import Theme from '../Theme'

const Navbar = ({setTheme} : ThemeProps) => {
  return (
    <>
        <div className="w-full h-screen">
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
        </div>
    </>
  )
}

export default Navbar