import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useRecipeStates } from '../Context/RecipeContext'

const Home = () => {
  const {state} = useRecipeStates()

  return (
    <div>
        {state.recipeList.map(item => <Card key={item.id} item={item}/>)}
    </div>
  )
}

export default Home