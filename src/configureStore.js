import throttle from 'lodash/throttle'
import { createStore } from './lib/redux'
import { loadState, saveState } from './lib/localStorage'
import todoApp from './reducers' 

const configureStore = () => {
  const KEY = 'todo-app'
  const persistedState = loadState(KEY)
  const store = createStore(
    todoApp,
    persistedState/*,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //ReduxDevTools => just use it with the original Redux */
  )
  store.subscribe(throttle(() => {
    saveState(KEY, {
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

export default configureStore