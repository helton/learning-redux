import { mapValues } from 'lodash'
import Store from './Store'

export const createStore = (reducer, initialState) => new Store(reducer, initialState)

export const combineReducers = reducers =>
  (state = {}, action) => mapValues(reducers, (reducer, key) => reducer(state[key], action))