import React from 'react'

const AddTodo = ({ onAddClick }) => {
  let input

  return (
    <div> 
      <input type="text" ref={node => input = node} placeholder="type your todo here"/>
      <button onClick={() => {
          onAddClick(input.value)
          input.value = ''
          input.focus()
        }}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo