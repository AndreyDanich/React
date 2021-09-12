<<<<<<< Updated upstream
import './App.css';
import './components/Message/message.css';
import { Message } from './components/Message/message';
import { MessageList } from './components/MessageList/messageList';
import { List } from './components/MessageList/list';
import { Example } from './components/MessageList/text';

// import './components/MessageList/messageList.css';
// import { Counter } from './components/Input/input';


// {
//   [].map(() => ...)
// }


function App() {
  const header = 'Hello';
  const quad = [];

  return (
    <div className="message">
      <Message header={header}></Message>
      <List></List>
      <MessageList></MessageList>

    </div >
=======
import React, { useState } from 'react';
import './App.css';
import { Form } from './components/AddMessage/form';
import './components/Message/message.css';
import { Message } from './components/Message/message';
import { MessageList } from './components/MessageList/messageList';
import { ChatList } from './components/ChatList/chatList';
// import { AddAnswer } from './components/AnswerBot/answer';


function App() {
  const header = 'Chat';
  const [message, setMessage] = useState([]);
  const chat = [{
    name: 'one', id: 1
  },
  {
    name: 'two', id: 2
    },
    {
      name: 'three', id: 3
    },
  ]

  function addMessage(title) {
    setMessage(
      message.concat([{
        title,
        id: Date.now()
      }])
    )
  }

  return (
    <div className="header">
      <Message header={header} />
    <div className="messenger">
      <div className="chatList">
        <ChatList chat={ chat}/>
      </div>
      <div className="messages">
        <MessageList message={message}/>
        {/* <AddAnswer message={message}/> */}
        <Form onCreate={addMessage}/>
      </div >
    </div>
    </div>
>>>>>>> Stashed changes
  );
}


export default App;


