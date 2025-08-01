import { useState } from "react";

const WriteNote = () => {
  const [content, setContent] = useState(`# ยินดีต้อนรับสู่ Smart Notes! 👋

## เริ่มต้นใช้งาน

Smart Notes เป็นแอปจดโน้ตที่รองรับ **Markdown** เต็มรูปแบบ ทำให้คุณสามารถ:

- ✅ เขียนโน้ตด้วย Markdown syntax
- 🖥️ ดู Preview แบบ real-time  
- 📁 จัดระเบียบด้วย Folder และ Tag
- 🔍 ค้นหาโน้ตได้อย่างรวดเร็ว
- 💾 Auto-save อัตโนมัติ

## Markdown Examples

### การจัดรูปแบบข้อความ
**ตัวหนา** ใช้ \`**text**\`
*ตัวเอียง* ใช้ \`*text*\`
\`code\` ใช้ backticks

### รายการ
1. รายการลำดับเลข
2. สามารถจัดลำดับได้

### Code Block
\`\`\`javascript
function hello() {
    console.log("Hello Smart Notes!");
}
\`\`\`

---

**เริ่มเขียนโน้ตของคุณได้เลย!**`);

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