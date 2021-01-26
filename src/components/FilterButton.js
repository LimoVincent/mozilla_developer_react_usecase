import React, { useState } from 'react'

function FilterButton({ name, isPressed, setFilter }) {
  console.log(name)
  return (
    <button
      onClick={() => setFilter(name)}
      type='button'
      className='btn toggle-btn'
      aria-pressed={isPressed}
    >
      <span className='visually-hidden'>Show </span>
      <span>{name}</span>
      <span className='visually-hidden'> tasks</span>
    </button>
  )
}

export default FilterButton
