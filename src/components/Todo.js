import React from 'react'

function Todo({ todo, toggleTaskCompleted, deleteTodo }) {
  const { name, completed, id } = todo

  return (
    <li className='todo stack-small'>
      <div className='c-cb'>
        <input
          id={id}
          type='checkbox'
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />

        <label className='todo-label' htmlFor='todo-0'>
          {name}
        </label>
      </div>
      <div className='btn-group'>
        <button type='button' className='btn'>
          Edit <span className='visually-hidden'>Eat</span>
        </button>
        <button
          onClick={() => deleteTodo(id)}
          type='button'
          className='btn btn__danger'
        >
          Delete <span className='visually-hidden'>Eat</span>
        </button>
      </div>
    </li>
  )
}

export default Todo
