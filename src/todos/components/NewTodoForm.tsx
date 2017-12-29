import { Field, Form, Formik, FormikActions, FormikProps } from 'formik'
import * as React from 'react'

import { Dispatch } from '../../store'

type Props = { dispatch: Dispatch }

export function NewTodoForm(props: Props) {
  type FormValues = { newTodoText: string }

  const handleSubmit = (values: FormValues, actions: FormikActions<FormValues>) => {
    actions.setFieldValue('newTodoText', '')
    props.dispatch({ type: 'ADD_TODO', text: values.newTodoText })
  }

  const renderForm = (props: FormikProps<FormValues>) => (
    <Form>
      <Field name="newTodoText" type="text" placeholder="What should be done?" />{' '}
      <button type="submit">Add Todo</button>
    </Form>
  )

  return <Formik initialValues={{ newTodoText: '' }} onSubmit={handleSubmit} render={renderForm} />
}
