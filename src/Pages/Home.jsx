import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Home = () => {
    const [list, setList] = useState([])
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey='+apiKey

    useEffect(() => {
        axios(url)
        .then(res => setList(res.data.recipes))
    }, [])
    

  return (
    <div>
        {list.map(item => <Card key={item.id} item={item}/>)}
    </div>
  )
}

export default Home