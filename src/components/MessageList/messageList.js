import { useState, useEffect } from 'react';


export function MessageList() {
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

    const [messages, setMessages] = useState([
        "messages 1",
        "messages 2",
        "messages 3",
    ]);

    return (
        (messages.map((message) => <div>{message}</div>)),

        (<div className="input" >
            <input className="formSize" type="text" />
            <button>push</button>
        </div>)
    )
}

// (<div className="input" >
//             <input className="formSize" type="text" />
//             <button>push</button>
//         </div>)

