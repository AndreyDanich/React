<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import { List } from './list';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

//id={Date.now()}

const Form = ({ onChange }) => {

    const [messages, setMessages] = useState('');
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));
    const classes = useStyles();

=======
import React from 'react';
import {MessageItem} from '../MessageItem/messageItem'
import PropTypes from 'prop-types';
>>>>>>> Stashed changes

    return (
<<<<<<< Updated upstream
        <>


            <form className={classes.root} noValidate autoComplete="off">
                <Input
                    value={messages} onChange={(event) => {
                        setMessages(event.target.value);
                    }}
                    type="text"
                    placeholder="Сообщение"
                    inputProps={{ 'aria-label': 'description' }}
                />
            </form>

            <div className={classes.root}>
                <Button
                    variant="contained" onClick={() => {
                        if (!onChange) {
                            return;
                        }
                        onChange(messages)
                    }}>send</Button>
            </div>
        </>
    );

};


export function MessageList() {
    const [messages, setMessages] = useState('');
    return (
        <div className="input">
            <div>{messages}</div>
            <Form onChange={setMessages} />
        </div>
    );

}

// в list.js прописал рендер через .map, как вписать в пустой массив изменения из формы не догнал











// const user = { author: "", text: "" };
    // const [messages, setMessages] = useState(0);

    // const updateMessage = () => {
    //     setMessages((prevMessages) => prevMessages + 1);
    // }

    // useEffect(() => {
    //     console.log(messages);
    // }, [messages]);

    // return (
    //     (messages.map((message) => <div>{message}</div>)),
    //     (<div className="input" >
    //         <input className="formSize" type="text" />{messages}
    //         <button onClick={updateMessage}>push</button>
    //     </div>)
    // )
=======
        <ul>
            {props.message.map((message, index) => {
                return <MessageItem message={message} index={index} key={message.id}/>
            })}
        </ul>
    )
}

MessageList.propTypes = {
    message: PropTypes.arrayOf(PropTypes.object).isRequired
}
>>>>>>> Stashed changes


