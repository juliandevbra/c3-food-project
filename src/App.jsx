import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import RecipeDetail from './Pages/RecipeDetail'
import ParentComponent from './Clase 13/ParentComponent'
import LoboEstepario from './Clase 13/LoboEstepario'
import Context from './Context/Context'

function App() {

  return (
    <>
      {/* <Context>
        <ParentComponent>
          <h1>Esto es el contenido de Parent</h1>
          <p>Texto ejemplo</p>
        </ParentComponent>

        <ParentComponent>
          <h1>Otro titulo de ejemplo</h1>
          <h3>Otro texto de ejemplo</h3>
        </ParentComponent>
      
        <LoboEstepario/>
      </Context> */}
      
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path={routes.detail} element={<RecipeDetail/>}/>
        <Route path='*' element={<h1>Página no encontrada. ERROR 404</h1>}/>
      </Routes>
    </>
  )
}

export default App
