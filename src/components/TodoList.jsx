import React from 'react'

export default function TodoList() {

  let todos = [
    'Go to the gym',
    'Complete this project',
    'Eat more veggies and proteins'
  ]

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex)=>{
        return(
        <li className='todoItem' key={todoIndex}>{todo}</li>
        )
      })}
    </ul>
  )
}
