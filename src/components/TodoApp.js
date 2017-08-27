import React from 'react'
import './TodoApp.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

let nextId = 0

const TodoApp = ({ todos, visibilityFilter, onAddClick, onTodoClick, onFilterClick}) =>
  <div className="todo-app">
    <AddTodo
      onAddClick={text => {
        onAddClick(nextId++, text)
      }}/>
    <TodoList
      todos={todos}
      onTodoClick={onTodoClick}
      />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={onFilterClick}/>
  </div>


export default TodoApp