import React from 'react'
import FilterLink from './FilterLink'

const Footer = () =>
  <p>
    <strong>Show:</strong>
    <FilterLink filter={'all'}>
      All
    </FilterLink>
    <FilterLink filter={'active'}>
      Active
    </FilterLink>
    <FilterLink filter={'completed'}>
      Completed
    </FilterLink>
  </p>

export default Footer