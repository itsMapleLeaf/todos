export class TodoState {
  todos = [] as TodoModel[]
}

export class TodoModel {
  id = Math.random()
  done = false
  constructor(public text: string) {}
}
