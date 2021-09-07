import React, { useState} from 'react';

function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}



export function Form({onCreate}) {
    const input = useInput('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }
    

    return (
        <form onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type='submit'>Push</button>
        </form>
    )
}
