import { createStore, applyMiddleware } from './lib/redux'
import createLogger from './lib/redux-logger'
import promise from './lib/redux-promise'
import todoApp from './reducers' 
import preloadedState from './data.json';

const configureStore = () => {
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({ 
      timestamp: true,
      duration: true,
    }))
  }

  console.log(preloadedState)

  return createStore(
    todoApp,
    preloadedState,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
