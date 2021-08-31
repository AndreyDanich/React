import React, { useState } from 'react';


export function List() {
    const [messages, setMessages] = useState([
        { id: 'id1', text: "message 1" },
        { id: 'id2', text: "message 2" },
        { id: 'id3', text: "message 2" },
    ]);

    return messages.map((message) => <div key={message.id}>{message.text}</div>);
}

