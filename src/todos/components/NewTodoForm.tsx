import { Field, Form, Formik, FormikActions, FormikProps } from 'formik'
import * as React from 'react'

type Props = {
  onSubmit: (text: string) => void
}

type FormValues = {
  newTodoText: string
}

export function NewTodoForm(props: Props) {
  const onSubmit = (values: FormValues, actions: FormikActions<FormValues>) => {
    actions.setFieldValue('newTodoText', '')
    props.onSubmit(values.newTodoText)
  }

  const render = (props: FormikProps<FormValues>) => (
    <Form style={{ display: 'inline-block' }}>
      <Field name="newTodoText" type="text" placeholder="What should be done?" />{' '}
      <button type="submit">Add Todo</button>
    </Form>
  )

  return <Formik initialValues={{ newTodoText: '' }} onSubmit={onSubmit} render={render} />
}
