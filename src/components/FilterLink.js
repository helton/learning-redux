import React from 'react'

const FilterLink = ({ visibilityFilter, filter, onClick, children }) => {
  if (visibilityFilter === filter)
    return <span>{children}</span>
  return (
    <a
      href="#/"
      onClick={event => {
        event.preventDefault()
        onClick(filter)
      }}>
      {children}
    </a>
  )
}

export default FilterLink