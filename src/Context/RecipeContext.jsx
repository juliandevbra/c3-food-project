import { createContext, useContext, useEffect, useReducer, useState} from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

const RecipeStates = createContext()

const initialState = {
    recipeList: [],
    recipeSelected: {},
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey='+apiKey

    useEffect(() => {
        //Llamado a la API 
        axios(url)
        .then(res => dispatch({type: 'GET_LIST', payload: res.data.recipes})) //res.data.recipes
    }, [])

    useEffect(() => {
        //Mando al LS
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    
    return (
        <RecipeStates.Provider value={{state, dispatch}}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)