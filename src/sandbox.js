const { todoApp } = require('./reducers/todo-reducers')
// const { createStore, combineReducers } = require('redux')
const { createStore } = require('./lib/redux-lite')

const groupIt = (groupName, fn) => {
  console.group(groupName)
  fn()
  console.log('State: ', store.getState())
  console.log('-'.repeat(100))
  console.groupEnd()
}

const store = createStore(todoApp)

groupIt('Initial State', () => {})

groupIt('Dispatching ADD_TODO', () => {
  store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  })
})

groupIt('Dispatching ADD_TODO again', () => {
  store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go Shopping'
  })
})

groupIt('Dispatching TOGGLE_TODO', () => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
  })
})


groupIt('Dispatching TOGGLE_TODO', () => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
  })
})