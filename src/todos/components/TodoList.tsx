import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export function TodoList(props: Props) {
  return <ul>{React.Children.map(props.children, child => <li>{child}</li>)}</ul>
}
