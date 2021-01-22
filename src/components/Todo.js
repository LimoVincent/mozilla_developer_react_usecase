import React, { useState } from 'react'

function Todo({ todo, toggleTaskCompleted, deleteTodo, editTodo }) {
  const { name, completed, id } = todo
  const [idEditing, setEditing] = useState(false)
  const [edit, setEdit] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
    if (edit) {
      editTodo(id, edit)
      setEdit('')
    }
  }
  const editingTemplate = (
    <form onSubmit={(e) => handleSubmit(e)} className='stack-small'>
      <div className='form-group'>
        <label className='todo-label' htmlFor={id}>
          New name for {name}
        </label>
        <input
          onChange={(e) => setEdit(e.target.value)}
          id={id}
          className='todo-text'
          type='text'
        />
      </div>
      <div className='btn-group'>
        <button
          onClick={() => setEditing(false)}
          type='button'
          className='btn todo-cancel'
        >
          Cancel
          <span className='visually-hidden'>renaming {name}</span>
        </button>
        <button type='submit' className='btn btn__primary todo-edit'>
          Save
          <span className='visually-hidden'>new name for {name}</span>
        </button>
      </div>
    </form>
  )
  const viewTemplate = (
    <div className='stack-small'>
      <div className='c-cb'>
        <input
          id={id}
          type='checkbox'
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className='todo-label' htmlFor={id}>
          {name}
        </label>
      </div>
      <div className='btn-group'>
        <button onClick={() => setEditing(true)} type='button' className='btn'>
          Edit <span className='visually-hidden'>{name}</span>
        </button>
        <button
          type='button'
          className='btn btn__danger'
          onClick={() => deleteTodo(id)}
        >
          Delete <span className='visually-hidden'>{name}</span>
        </button>
      </div>
    </div>
  )

  return <li className='todo'>{idEditing ? editingTemplate : viewTemplate}</li>
}

export default Todo
