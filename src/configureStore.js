import { createStore } from './lib/redux'
import todoApp from './reducers' 

const logger = store => next => {
  if (!console.group) {
    return next
  }

  return action => {
    console.group(action.type)
    console.log('%cprev state', 'color: grey', store.getState())
    console.log('%caction', 'color: yellow', action)
    const returnValue = next(action)
    console.log('%cnext state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const promise = store => next => async action => next(typeof action.then === 'function' ? await action : action)

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch.bind(store))
  )
}

const configureStore = () => {
  const store = createStore(
    todoApp/*,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //ReduxDevTools => just use it with the original Redux */
  )

  const middlewares = [promise]
  
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  wrapDispatchWithMiddlewares(store, middlewares)

  return store
}

export default configureStore