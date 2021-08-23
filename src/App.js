import './App.css';
import './components/Message/message.css';
import { Message } from './components/Message/message';
import { MessageList } from './components/MessageList/messageList';
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
  );
}

export default App;
