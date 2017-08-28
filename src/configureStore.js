import { createStore } from './lib/redux'
import todoApp from './reducers' 

const configureStore = () => {
  const store = createStore(
    todoApp/*,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //ReduxDevTools => just use it with the original Redux */
  )

  const addLoggingToDispatch = store => {
    const rawDispatch = store.dispatch.bind(store)
    if (!console.group) {
      return rawDispatch
    }
  
    return action => {
      console.group(action.type)
      console.log('%cprev state', 'color: grey', store.getState())
      console.log('%caction', 'color: yellow', action)
      const returnValue = rawDispatch(action)
      console.log('%cnext state', 'color: green', store.getState())
      console.groupEnd(action.type)
      return returnValue
    }
  }
  
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  return store
}

export default configureStore