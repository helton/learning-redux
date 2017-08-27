import React from 'react'
import FilterLink from './FilterLink'

const Footer = ({ visibilityFilter, onFilterClick }) =>
  <p>
    Show:
    <FilterLink
      filter={'SHOW_ALL'}
      visibilityFilter={visibilityFilter}
      onClick={onFilterClick}>
      All
    </FilterLink>
    <FilterLink
      filter={'SHOW_ACTIVE'}
      visibilityFilter={visibilityFilter}
      onClick={onFilterClick}>
      Active
    </FilterLink>
    <FilterLink
      filter={'SHOW_COMPLETED'}
      visibilityFilter={visibilityFilter}
      onClick={onFilterClick}>
      Completed
    </FilterLink>
  </p>

export default Footer