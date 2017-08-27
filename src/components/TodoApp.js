import React from 'react'
import './TodoApp.css'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const TodoApp = () =>
  <div className="todo-app">
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>


export default TodoApp