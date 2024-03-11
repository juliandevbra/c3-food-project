import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div>
        <Link to={'/detail/' + item.id}>
            <h3>{item.title}</h3>
        </Link>
        <img src={item.image} alt="" />
    </div>
  )
}

export default Card