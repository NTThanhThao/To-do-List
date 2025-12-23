import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css' // Đảm bảo file này tồn tại

// Kiểm tra xem thẻ root có thực sự tồn tại không trước khi render
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Lỗi: Không tìm thấy thẻ có id='root' trong index.html");
}