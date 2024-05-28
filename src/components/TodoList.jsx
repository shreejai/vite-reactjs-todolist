import React from 'react'
import TodoCard from './TodoCard'

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
        <TodoCard key={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
        )
      })}
    </ul>
  )
}
