import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context/RecipeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>

)
