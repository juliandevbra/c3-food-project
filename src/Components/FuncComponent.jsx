import { useEffect, useState } from 'react'

const FuncComponent = () => {
    console.log('Se procesa el bloque de código')
    const [name, setName] = useState('Leonardo')
    const [count,setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    //Montaje
    useEffect(() => {
        console.log('Esto se ejecuta una sola vez')
    }, [])

    //Actualización de name
    useEffect(() => {
        console.log('Esto se ejecuta cuando name se modifica')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [name, count])

    //Desmontaje
    useEffect(() => {
        
        return () => {
            console.log('Se desmonta el componente')
        }
    }, [])


  return (
    <div>
        {console.log('Se ejecuta el renderizado')}
        {loading ? 'Cargando...' : 
            <>
                <h4>{name}</h4>
                <button onClick={() => setName('Lenin')}>Ese no es mi nombre</button>
                <div>
                    <button onClick={() => setCount(count-1)}>-</button>
                    <h4>{count}</h4>
                    <button onClick={() => setCount(count+1)}>+</button>
                </div>
            </>
        } 
    </div>
  )
}

export default FuncComponent