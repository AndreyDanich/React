import React from 'react';
import './messageItem.css';
import PropTypes from 'prop-types'


export function MessageItem({ message }) {

    return (
        <li className='li'>
            {message.title}
        </li>
    )
}

MessageItem.propTypes = {
    message: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}