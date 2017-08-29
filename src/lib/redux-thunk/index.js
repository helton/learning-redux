const thunk = store => next => action =>
  typeof action === 'function' ? 
    action(next.bind(store)) :
    next(action)

export default thunk
