import React from 'react';
import './messageItem.css';


export function MessageItem({ message }) {

    return (
        <li className='li'>
            {message.title}
        </li>
    )
}