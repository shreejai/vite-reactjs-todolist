import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  const {todos, handleDeleteTodos} = props;

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex)=>{
        return(
        <TodoCard {...props} key={todoIndex} index={todoIndex} handleDeleteTodos={handleDeleteTodos}>
          <p>{todo}</p>
        </TodoCard>
        )
      })}
    </ul>
  )
}
