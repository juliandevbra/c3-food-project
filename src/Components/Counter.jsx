import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        case 'random':
            return {count: action.payload}
    }
}

const initialState = {count: 0}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const randomNum = Math.floor(Math.random() * 100) + 1
  return (
    <div>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'random', payload: randomNum})}>Random</button>
    </div>
  )
}

export default Counter