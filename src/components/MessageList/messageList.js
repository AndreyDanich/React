<<<<<<< Updated upstream
import React, { useState } from 'react';
import { List } from './list';
// import { Message } from '../Message/message';

//id={Date.now()}

const Form = ({ onChange }) => {

    const [messages, setMessages] = useState('');
=======
import React from 'react';
import {MessageItem} from '../MessageItem/messageItem'

>>>>>>> Stashed changes

export function MessageList(props) {
    return (
<<<<<<< Updated upstream
        <>
            <input value={messages} onChange={(event) => {
                setMessages(event.target.value);
            }} type="text" />
            <button onClick={() => {
                if (!onChange) {
                    return;
                }
                onChange(messages)
            }}>send</button>
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

=======
        <ul>
            {props.message.map((message, index) => {
                return <MessageItem message={message} index={index}/>
            })}
            

        </ul>
    )
>>>>>>> Stashed changes
}




// (<div className="input" >
//             <input className="formSize" type="text" />
//             <button>push</button>
//         </div>)


// return <MessageItem message={message} key={message.id}/>





