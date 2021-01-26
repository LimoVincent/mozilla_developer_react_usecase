import React, { useState } from 'react'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Todo from './components/Todo'

import { v4 as uuidv4 } from 'uuid'

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

const App = ({ data }) => {
  const [todos, setTodos] = useState(data)
  const [filter, setFilter] = useState('All')

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

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }
  const editTodo = (id, newTodo) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, name: newTodo }
      }
      return todo
    })
    setTodos(editedTodos)
  }
  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form {...{ addTodos }} />
      <div className='filters btn-group stack-exception'>
        {FILTER_NAMES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
            key={name}
          />
        ))}
      </div>

      <h2 id='list-heading'>
        {todos.length} task{todos.length >= 1 && 's'} remaining
      </h2>

      <ul
        // role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {todos.map((todo) => (
          <Todo
            {...{ todo, toggleTaskCompleted, deleteTodo, editTodo }}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
