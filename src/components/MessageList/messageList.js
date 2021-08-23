import React, { useState } from 'react';
import { List } from './list';
// import { Message } from '../Message/message';

//id={Date.now()}

const Form = ({ onChange }) => {

    const [messages, setMessages] = useState('');

    return (
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

}

// в list.js прописал рендер через .map, как вписать в пустой массив изменения из формы не догнал









// (<div className="input" >
//             <input className="formSize" type="text" />
//             <button>push</button>
//         </div>)


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


