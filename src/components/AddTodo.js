import React from 'react'

const AddTodo = ({ store }) => {
  let nextId = 0
  let input

  return (
    <div> 
      <input type="text" placeholder="type your todo here"
        ref={node => input = node}/>
      <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextId++,
            text: input.value
          })
          input.value = ''
          input.focus()
        }}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo