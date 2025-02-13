
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './components/AppContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <AppProvider>
    <App />
    </AppProvider>
)
