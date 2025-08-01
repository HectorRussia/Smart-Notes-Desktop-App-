import { Eye, Pencil } from "lucide-react"
import { useState } from "react";
import type { ThemeProps } from "../Theme";

export const WriteWatch = ({currentTheme }: ThemeProps) => {

  const [selcted, setSelected] = useState<boolean>(false);
  const CustomText = currentTheme === "cupcake" ? "text-white" : "text-gray-400";
  return (
    <>
       <div className="flex flex-col w-full">
            <div className="flex justify-evenly items-center gap-x-5 h-10 w-[250px] ml-10 bg-gray-800 mt-4 px-2 rounded-md">
                <div
                  className={`flex justify-center items-center gap-2 cursor-pointer w-1/2 rounded-md py-auto ${selcted === true ? "bg-black" : ""}`}
                  onClick={() => setSelected(true)}
                >
                  <Pencil className={CustomText} size={17}/>
                  <div className={CustomText}>แก้ไข</div>
                </div>
                <div
                  className={`flex justify-center items-center gap-2 cursor-pointer w-1/2 rounded-md py-auto ${selcted === false ? "bg-black" : ""}`}
                  onClick={() => setSelected(false)}
                >
                  <Eye className={CustomText} size={17}/>
                  <div className={CustomText}>ดูตัวอย่าง</div>
                </div>
            </div>
            <div className="border-t border-gray-500 mt-5"></div>
        </div>
    </>
  )
}
