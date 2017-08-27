import React from 'react'

const Todo = ({ completed, text, onClick }) =>
  <li
    className={completed ? 'completed' : ''}
    onClick={onClick}>
    {text}
  </li>

export default Todo