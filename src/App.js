import './App.css';
import './components/Message/message.css';
import { Message } from './components/Message/message';

// class App extends React.Component {
//   render() {
//     const header = 'Hello'
//     return (
//       <div className="message">
//         <Message header={header}></Message>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));


function App() {
  const header = 'Hello'
  return (
    <div className="message">
      <Message header={header}></Message>
    </div>
  );
}

export default App;
