import React from 'react'
import './App.css'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const App = () =>
  <div className="todo-app">
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>

export default App