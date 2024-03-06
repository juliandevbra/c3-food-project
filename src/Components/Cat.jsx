import axios from 'axios'
import { useEffect, useState } from 'react'

const Cat = () => {
    const [cat, setCat] = useState()
    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        axios(url)
        .then(res => setCat(res.data[0]))
    }, [])
   
    console.log(cat)
  return (
    <div>
        {cat ? <img src={cat.url} alt='' />: 'Cargando...'}
    </div>
  )
}

export default Cat