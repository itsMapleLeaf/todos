import { Field, Form, Formik, FormikActions, FormikProps } from 'formik'
import * as React from 'react'

import { Dispatch } from '../../store'
import { StoreConsumer } from '../../storeContext'

export function TodoActions() {
  type FormValues = { newTodoText: string }

  const handleSubmit = (dispatch: Dispatch) => (
    values: FormValues,
    actions: FormikActions<FormValues>,
  ) => {
    actions.setFieldValue('newTodoText', '')
    dispatch({ type: 'ADD_TODO', text: values.newTodoText })
  }

  const renderForm = (props: FormikProps<FormValues>) => (
    <Form style={{ display: 'inline-block' }}>
      <Field name="newTodoText" type="text" placeholder="What should be done?" />{' '}
      <button type="submit">Add Todo</button>
    </Form>
  )

  return (
    <StoreConsumer>
      {(_, dispatch) => (
        <>
          <Formik
            initialValues={{ newTodoText: '' }}
            onSubmit={handleSubmit(dispatch)}
            render={renderForm}
          />

          <button onClick={() => dispatch({ type: 'CLEAR_FINISHED_TODOS' })}>
            Clear Finished Todos
          </button>
        </>
      )}
    </StoreConsumer>
  )
}
