import { createContext, useContext, useState } from "react";

export const GlobalStates = createContext()

const Context  = ({children}) => {
    //Todos los estados globales
    const [salario, setSalario] = useState(1500000)

    //Funciones globales
    return (
        <GlobalStates.Provider value={{salario, setSalario}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => useContext(GlobalStates)