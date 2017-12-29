import { Field, Form, Formik, FormikActions, FormikProps } from 'formik'
import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'

type FormValues = { newTodoText: string }

export function NewTodoForm() {
  return (
    <StoreConsumer>
      {({ dispatch }) => {
        const onSubmit = (values: FormValues, actions: FormikActions<FormValues>) => {
          actions.setFieldValue('newTodoText', '')
          dispatch({ type: 'ADD_TODO', text: values.newTodoText })
        }

        const render = (props: FormikProps<FormValues>) => (
          <Form style={{ display: 'inline-block' }}>
            <Field name="newTodoText" type="text" placeholder="What should be done?" />{' '}
            <button type="submit">Add Todo</button>
          </Form>
        )

        return <Formik initialValues={{ newTodoText: '' }} onSubmit={onSubmit} render={render} />
      }}
    </StoreConsumer>
  )
}
