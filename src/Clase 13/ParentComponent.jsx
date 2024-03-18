import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import { useGlobalStates } from '../Context/Context'


const ParentComponent = ({children}) => {
  // const [salario, setSalario] = useState(150000)
  // const { salario } = useGlobalStates()
  // console.log(salario)
  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
        <ChildComponent />
        {children}
        {console.log('Se renderizó el padre')}
    </div>
  )
}

export default ParentComponent