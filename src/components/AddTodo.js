import React from 'react'
import { Consumer } from '../lib/react-redux'

let nextId = 0

class AddTodo extends Consumer {
  render() {
    let input
    const store = this.store
    
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
}

export default AddTodo