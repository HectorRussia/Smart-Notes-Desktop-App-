


# Smart Notes Desktop App

## 🛠️ Tech Stack
- **Frontend:** React + Tailwind CSS + daisyui
- **Backend:** Rust (ผ่าน Tauri commands)
- **Markdown rendering:** react-markdown
- **File storage:** Local filesystem (JSON / Markdown files)
- **Mock UX/UI:** [lovable.dev](https://lovable.dev/)

## ✅ Summary
แอปจดโน้ตบน Desktop ที่:
- เขียน Markdown ได้
- ใช้งานง่าย เร็ว
- เก็บข้อมูลแบบ offline ใน local disk
- สร้างได้ด้วย Tauri + Rust
- Side Project

---

## 🎯 เป้าหมาย
สร้างแอปจดโน้ตที่ตอบโจทย์การใช้งานจริงและโชว์ศักยภาพการพัฒนา Desktop App ด้วย Tauri + Rust

---

## 🧱 Feature Plan (Roadmap)

### 🟢 Phase 1 – Core Functionality (Minimum Viable Product)
- สร้าง / เปิด / ลบ / บันทึกโน้ต (.md)
- เขียน Markdown พร้อม Preview แบบ live
- Auto-save เมื่อหยุดพิมพ์
- เก็บไฟล์ .md ไว้ใน local directory (notes/)

### 🟡 Phase 2 – UX / Advanced Features
- ค้นหาโน้ตตามคำ keyword
- จัดหมวดหมู่ (เช่น Folder หรือ Tag)
- Export/Import โน้ตทั้งหมดเป็น ZIP
- Notification “บันทึกสำเร็จ” หรือ “ลบสำเร็จ”
- Toggle Light/Dark Mode

### 🔴 Phase 3 – Portfolio Polish
- README สวย ๆ พร้อมภาพตัวอย่าง
- Screenshot UI
- สร้าง Binary: .exe, .dmg
- เพิ่ม GitHub Link และ Download

---

## 🔗 GitHub & Download
- [GitHub Repository](https://github.com/<your-username>/<your-repo>)
- [Download Latest Release](https://github.com/<your-username>/<your-repo>/releases)

---

## วิธีเริ่มต้นใช้งานโปรเจกต์นี้หลังจาก Clone จาก GitHub

โปรเจกต์นี้เป็นแอปเดสก์ท็อปที่สร้างด้วย React (Vite) และ Tauri สามารถใช้งานได้ทั้งบน Windows, macOS และ Linux

### ขั้นตอนการติดตั้งและรันโปรเจกต์

1. **Clone โปรเจกต์จาก GitHub**
   ```bash
   git clone <url-repo>
   cd my-tauri-app
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   ```

3. **รันแอปในโหมดพัฒนา (Dev Mode)**
   ```bash
   npm run tauri
   ```
   หรือ
   ```bash
   npm run tauri dev
   ```

4. **สร้างไฟล์สำหรับเว็บแอป (Build React)**
   ```bash
   npm run build
   ```

5. **สร้างไฟล์แอปเดสก์ท็อปสำหรับติดตั้ง (Build Desktop App)**
   ```bash
   npm run tauri build
   ```

### หมายเหตุ
- ต้องติดตั้ง [Rust](https://www.rust-lang.org/tools/install) ในเครื่องก่อนใช้งาน Tauri
- หากต้องการ build สำหรับแต่ละ OS ให้ดูรายละเอียดเพิ่มเติมใน [Tauri Documentation](https://tauri.app/)

## โครงสร้างโปรเจกต์
- `src/` : โค้ด React (Frontend)
- `src-tauri/` : โค้ดฝั่ง Tauri (Rust Backend)
- `public/` : ไฟล์ static assets

## คำสั่งสำคัญ
- `npm run dev` : รัน React ด้วย Vite (เฉพาะเว็บ)
- `npm run build` : สร้างไฟล์เว็บแอป
- `npm run tauri` หรือ `npm run tauri dev` : รันแอป Tauri ในโหมด dev
- `npm run tauri build` : สร้างไฟล์แอปเดสก์ท็อปสำหรับติดตั้ง


