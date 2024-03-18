import React, { useContext } from 'react'
import lobo from './lobo.png'
import { GlobalStates } from '../Context/Context'

const LoboEstepario = () => {
  const {salario} = useContext(GlobalStates)
  return (
    <div className='lobo-estepario'>
        <img width={200} className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        {console.log('Se renderizó el lobo')}
    </div>
  )
} 

export default LoboEstepario