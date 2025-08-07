import { useState } from "react";

export interface noteProps {
    id: number;
    title: string;
    content: string;
    tags: string[];
    date: string;
}


const WriteNote = ({title} : noteProps) => {
  const note = title[0]; // ดึงโน้ตแรกเพื่อแสดงตัวอย่าง
  const [content, setContent] = useState(note);

  return (
    <>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-10 pt-3 h-full bg-transparent text-gray-300 resize-none outline-none border-none font-mono text-sm leading-relaxed" 
          placeholder="เขียนโน้ตของคุณที่นี่..."
        />
    </>
  )
}

export default WriteNote