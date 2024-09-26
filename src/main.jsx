import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Principal } from './pages/Principal'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Principal/>
  </StrictMode>
)
