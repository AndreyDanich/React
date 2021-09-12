import React from 'react';
import './chatList.css';
import PropTypes from 'prop-types';
import { ChatItem } from '../ChatItem/chatItem';


export function ChatList(props) {
    return (
        <ul className='chatUl'>
            {props.chat.map((chat, index) => {
                return <ChatItem chat={chat} key={chat.id} index={ index}/>
            })}
        </ul>
    )
}

ChatList.propTypes = {
    chat: PropTypes.arrayOf(PropTypes.object).isRequired
}




