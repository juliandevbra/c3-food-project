import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'

const Navbar = () => {

    const navigate = useNavigate()

    // Ejemplo de para que se usa navigate
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     // Validaciones

    //     //Mandamos la info a una DB

    //     //Le decimos al usuario que se envió la info

    //    navigate()
    // }

  return (
    <div>
        <button onClick={() => navigate(-1)}>🔙</button>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.contact}><h3>Contact</h3></Link>
        <Link to={routes.about}><h3>About</h3></Link>

        {/* <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Enviar</button>
        </form> */}
    </div>
  )
}

export default Navbar