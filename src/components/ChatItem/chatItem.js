import React from 'react';
import './chatItem.css';
import PropTypes from 'prop-types';



export function ChatItem({chat, index}) {

    return (
        <li className='chat-li'>
            <strong>{ index +1}</strong>
            {chat.name}
        </li>
    )
}

ChatItem.propTypes = {
    chat: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
