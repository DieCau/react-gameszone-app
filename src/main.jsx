import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importar el componente App y renderizarlo en el elemento con id 'root'
// Utilizar StrictMode para resaltar problemas potenciales en la aplicación
// createRoot es una función de React 18 para crear un root de la aplicación
// renderizar el componente App dentro del root creado
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
