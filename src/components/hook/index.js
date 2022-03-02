import React from 'react'
import { Form, Field, useField } from 'react-final-form'
export default function Hook() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const onSubmit = async (...props) => {
        await sleep(200)
        console.log(props);
    }
    return (
        <Form onSubmit={onSubmit}
            validate={values => {
                console.log(values);
                const errors = {}
                if (!values.username) {
                    errors.username = "required"
                }
                return errors
            }}
            render={({ form, handleSubmit, values, submitting, pristine }) =>
                <form onSubmit={handleSubmit}>
                    <Field name="username">
                        {({ input, meta }) => {
                            return <div>
                                <input {...input} type="text" placeholder="username"></input>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        }}
                    </Field>
                    <div>
                        <button type="submit" disabled={submitting}>Submit</button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            }
        >
        </Form >
    )
}
