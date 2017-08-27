import React from 'react'
import './App.css'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const App = ({ match: { params } }) =>
  <div className="todo-app">
    <AddTodo/>
    <VisibleTodoList
      filter={params.filter || 'all'}
    />
    <Footer/>
  </div>

export default App