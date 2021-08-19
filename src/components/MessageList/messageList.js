import { useState } from 'react';


export function MessageList() {
    const [messages, setMessages] = useState([
        "message 1",
        "message 2",
        "message 3",
    ]);

    return messages.map((message) => <div>{message}</div>);
}




// import React, { useState } from 'react';

// export function MessageList() {
//     const [name, setCount] = useState([]);
//     return (
//         <div>
//             <input value={name} type="text" />
//             <button className="counter-button">Click!</button>
//         </div>
//     )
// }

