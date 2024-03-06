import  { useEffect, useState } from 'react'

const Dog = () => {
    const [dog, setDog] = useState()
    const [toggle, setToggle] = useState(false) // ejemplo para usar las dependencias
    const url = 'https://dog.ceo/api/breeds/image/random'
    console.log(toggle)

    const changeDog = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDog(data)
        })
    }

    useEffect(changeDog, [])

  return (
    <div>
        <button onClick={changeDog}>Cambiar perrito</button>
        {dog ? <img src={dog.message} alt="" /> : 'Cargando...'}
    </div>
  )
}

export default Dog


// Proceso del código
// Primero los estados y las variables 
// Después el return
// Después el useEffect en donde ocurre un setState que genera el re-render
// Vuelve a procesar los estados y las variables
// Vuelve a renderizar el return
// useEFfect no vuelve a ejecutarse