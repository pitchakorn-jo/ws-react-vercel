import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <h1>สวัสดีครับ! 🎉</h1>
        <h2>Hello World with React + Vite</h2>
        
        <div className="card">
          <p>นี่คือ React App ที่สร้างด้วย Vite</p>
          <p>คลิกปุ่มด้านล่างเพื่อดูการทำงาน</p>
          
          <button onClick={() => setCount((count) => count + 1)}>
            คลิกแล้ว {count} ครั้ง
          </button>
        </div>
        
        <div className="footer">
          <p>🚀 พร้อมเริ่มพัฒนา React Application แล้ว!</p>
        </div>
      </div>
    </div>
  )
}

export default App
