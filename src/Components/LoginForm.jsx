import React from 'react'

const LoginForm = ({handleClick}) => {

  return (
    <div>
        <h3>Debe loguear</h3>
        <input role='email' type="email" />
        <input data-testid='pass' type="password" />
        <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default LoginForm