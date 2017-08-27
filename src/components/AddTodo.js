import React from 'react'
import { connect } from '../lib/react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div> 
      <input type="text" placeholder="type your todo here"
        ref={node => input = node}/>
      <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = ''
          input.focus()
        }}>
        Add Todo
      </button>
    </div>
  )
}

export default connect()(AddTodo)