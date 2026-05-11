import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast"

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
          style: {
              background: "#0B0B0B",
              color: "#FFFFFF",
              border: "1px solid rgba(212,255,0,0.15)"
          }
      }}
  />
  </ThemeProvider>,
)
