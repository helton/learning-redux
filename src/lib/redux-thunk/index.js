const thunk = store => next => action =>
  typeof action === 'function' ? 
    action(next, store.getState) :
    next(action)

export default thunk
