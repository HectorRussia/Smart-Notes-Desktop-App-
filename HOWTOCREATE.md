
## วิธีสร้างโปรเจกต์ใหม่ (Vite + Tauri)

ถ้าอยากสร้างโปรเจกต์ใหม่แบบนี้เอง สามารถใช้คำสั่งนี้ได้เลย:
กว่าจะเจอจุดถูกงมอยู่นานมาก

```bash
npm create vite@latest my-tauri-app -- --template react-ts
cd my-tauri-app
npm install
npm install --save-dev @tauri-apps/cli
npx tauri init
```
ระหว่าง `npx tauri init` จะมีคำถามให้ตอบ เช่น
- What is your app name? › My Tauri App
- What should the window title be? › My Tauri App
- Where is your web app located relative to the `/src-tauri` folder? › ../dist
- What is the URL of your dev server? › http://localhost:5173
- What is your frontend dev command? › npm run dev
- What is your frontend build command? › npm run build

---