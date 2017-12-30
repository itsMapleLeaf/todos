import * as React from 'react'
import styled from 'styled-components'

import { TodoFilter } from '../types'

const FilterLink = styled.a`
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 0.75;
  }

  ${(props: { active?: boolean }) => (props.active ? 'opacity: 1' : '')};
`

type Props = {
  filter: TodoFilter
  onFilterChange: (newFilter: TodoFilter) => void
}

export function TodoFilters(props: Props) {
  const renderFilterLink = (filter: TodoFilter, text: string) => (
    <FilterLink active={props.filter === filter} onClick={() => props.onFilterChange(filter)}>
      {text}
    </FilterLink>
  )

  return (
    <>
      <span>Filter:</span> {renderFilterLink(TodoFilter.all, 'All')}
      {' | '}
      {renderFilterLink(TodoFilter.completed, 'Completed')}
      {' | '}
      {renderFilterLink(TodoFilter.notCompleted, 'Not Completed')}
    </>
  )
}
