import React, { useState } from 'react'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Todo from './components/Todo'

import { v4 as uuidv4 } from 'uuid'
uuidv4()
const App = ({ data }) => {
  const [todos, setTodos] = useState(data)

  const addTodos = (name) => {
    setTodos([...todos, { name: name, completed: false, id: uuidv4() }])
  }

  const toggleTaskCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form {...{ addTodos }} />
      <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id='list-heading'>
        {todos.length} task{todos.length >= 1 && 's'} remaining
      </h2>

      <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {todos.map((todo) => (
          <Todo {...{ todo, toggleTaskCompleted }} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
