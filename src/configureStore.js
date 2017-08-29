import { createStore, applyMiddleware } from './lib/redux'
import { createLogger } from './lib/redux-logger'
import thunk from './lib/redux-thunk'
import todoApp from './reducers' 

const configureStore = () => {
  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({ 
      timestamp: true,
      duration: true,
    }))
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
