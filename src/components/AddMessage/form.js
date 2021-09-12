import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));


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
    const classes = useStyles();
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus();
      }, []);

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }
    

    return (
        <form onSubmit={submitHandler} className={classes.root} noValidate autoComplete="off">
            <Input ref={inputRef} placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} {...input.bind} />
            <button type='submit'>Push</button>
        </form>
    )
}
