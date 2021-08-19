import './App.css';
import './components/Message/message.css';
import { Message } from './components/Message/message';
import { MessageList } from './components/MessageList/messageList';


// {
//   [].map(() => ...)
// }


function App() {
  const header = 'Hello'
  return (
    <div className="message">
      <Message header={header}></Message>
      <MessageList></MessageList>
    </div>
  );
}

export default App;
