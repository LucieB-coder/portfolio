import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-1 flex-col bg-background-700 text-white/80 p-0">
      <App />
      {/* <footer>
        <ChessFooter />
      </footer> */}
    </div>
  </React.StrictMode>,
)
