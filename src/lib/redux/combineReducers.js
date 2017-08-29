import mapValues from 'lodash/mapValues'

const combineReducers = reducers =>
  (state = {}, action) => mapValues(reducers, (reducer, key) => reducer(state[key], action))

export default combineReducers
