import React from 'react'
import './TodoApp.css'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const TodoApp = ({ store }) =>
  <div className="todo-app">
    <AddTodo store={store}/>
    <VisibleTodoList store={store}/>
    <Footer store={store}/>
  </div>


export default TodoApp