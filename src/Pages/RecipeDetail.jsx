import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({})
    const params = useParams()
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=`+apiKey
    
    //Llamo al context de RecipeContext
    const {favs, setFavs} = useRecipeStates()

    useEffect(()=> {
        axios(url)
        .then(res => setRecipe(res.data))
    }, [])
    
  return (
    <div>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" />
        <h5>{recipe.summary}</h5>
        <button onClick={() => setFavs([...favs, recipe])}>⭐</button>
    </div>
  )
}

export default RecipeDetail