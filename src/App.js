import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/AddMessage/form';
import './components/Message/chat.css';
import { Message } from './components/Message/message';
import { MessageList } from './components/MessageList/messageList';
<<<<<<< Updated upstream
import { List } from './components/MessageList/list'
// import './components/MessageList/messageList.css';
// import { Counter } from './components/Input/input';


// {
//   [].map(() => ...)
// }


function App() {
  const header = 'Hello';
  const quad = [1, 2];
  return (
    <div className="message">
      <Message header={header}></Message>
      <List quad={quad}></List>
      <MessageList></MessageList>
    </div>
=======
import { AddAnswer } from './components/AnswerBot/answer';


function App() {
  const header = 'Chat';
  const [message, setMessage] = useState([]);

  function addMessage(title) {
    setMessage(
      message.concat([{
        title,
        id: Date.now()
      }])
    )
  }

  return (
    <div className="chat">
      <Message header={header} />
      <MessageList message={message}/>
      <AddAnswer message={message}/>
      <Form onCreate={addMessage}/>
    </div >
>>>>>>> Stashed changes
  );
}

export default App;
