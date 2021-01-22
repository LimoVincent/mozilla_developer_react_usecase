import React from 'react'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

import Todo from './components/Todo'

// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const App = ({ data }) => {
  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form />
      <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id='list-heading'>3 tasks remaining</h2>
      <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {data.map((todo) => (
          <Todo {...{ todo }} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
