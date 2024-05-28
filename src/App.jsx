import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  let todos = [
    'Go to the gym',
    'Complete this project',
    'Eat more veggies and proteins'
  ]

  return (
    <>
      <TodoInput/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
