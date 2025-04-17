import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './assets/scss/tostyle.scss'
import './assets/scss/responsivestyle.scss'
import "bootstrap/scss/bootstrap.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
