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

  const addLoggingToDispatch = store => {
    const rawDispatch = store.dispatch.bind(store)
    if (!console.group) {
      return rawDispatch
    }
  
    return action => {
      console.group(action.type)
      console.log('%c prev state', 'color: grey', store.getState())
      console.log('%c action', 'color: yellow', action)
      const returnValue = rawDispatch(action)
      console.log('%c next state', 'color: green', store.getState())
      console.groupEnd(action.type)
      return returnValue
    }
  }
  
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(throttle(() => {
    saveState(KEY, {
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

export default configureStore