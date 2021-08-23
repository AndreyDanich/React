import React from 'react';


export function List() {
    const list = [
        "message 1",
        "message 2",
        "message 3",
    ];

    return list.map((message) => <div>{message}</div>);
}
