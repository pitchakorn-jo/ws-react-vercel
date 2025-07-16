import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">สวัสดีครับ! 🎉</h1>
        <h2 className="text-2xl text-neutral-700 mb-6">Hello World with React + Vite + Tailwind v4</h2>
        
        <div className="bg-neutral-50 rounded-md p-6 mb-6">
          <p className="text-neutral-600 mb-2">นี่คือ React App ที่สร้างด้วย Vite</p>
          <p className="text-neutral-600 mb-4">คลิกปุ่มด้านล่างเพื่อดูการทำงาน</p>
          
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-web-green-500 hover:bg-web-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            คลิกแล้ว {count} ครั้ง
          </button>
        </div>
        
        <div className="border-t border-neutral-200 pt-4">
          <p className="text-web-green-600 font-medium">🚀 พร้อมเริ่มพัฒนา React Application แล้ว!</p>
          <p className="text-sm text-neutral-500 mt-2">Node.js 22 + React 18 + Vite 6 + Tailwind CSS v4</p>
        </div>
      </div>
    </div>
  )
}

export default App
