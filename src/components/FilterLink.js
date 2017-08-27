import React from 'react'
import Link from './Link'
import { Consumer } from '../lib/react-redux'

class FilterLink extends Consumer {
  render() {
    const props = this.props
    const store = this.store
    const state = store.getState()

    return (
      <Link 
        active={props.filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    )
  }
}

export default FilterLink