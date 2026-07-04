import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initButtonRipples, initButtonMagnetic, initCursorInteractions } from './utils/microInteractions'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize micro-interactions after mount
window.requestAnimationFrame(() => {
  try {
    initButtonRipples();
    // initButtonMagnetic(); // Disabled for performance
    // initCursorInteractions(); // Disabled for performance
  } catch {
    // silent fail in SSR or test env
  }
});
