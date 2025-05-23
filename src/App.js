import React, { useEffect, useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef(null);
  const Author = "Tim";

  useEffect(() => {
    // Connect to the WebSocket backend
    socketRef.current = new WebSocket('ws:192.168.120.86:5125/chat');

    socketRef.current.onopen = () => {
      console.log('Connected to chat server');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(data);
    };

    socketRef.current.onclose = () => {
      console.log('Disconnected from chat server');
      const data = [
        {Author: 'Benji', Message: 'test1 tim', TimeStamp: '2025-05-05T15:07:31.4378781Z'},
        {Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z'},
        {Author: 'Benji', Message: 'test13', TimeStamp: '2025-05-05T17:00:50.2074785Z'}
      ];
      console.log(data)
      setMessages(data);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const message = {
      Author: Author,
      Message: input,
      TimeStamp: new Date().toDateString,
    };

    socketRef.current.send(JSON.stringify(message));
    setInput('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Chat</h2>
      <div style={{ border: '1px solid #ccc', height: '200px', overflowY: 'scroll', padding: '0.5rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            {msg.Author == Author ?
            <div style={{ textAlign: 'right', border: 'solid-black'}} > {/* make Message align right */}
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}> {/* make Author and TimeStamp in line */}
                <div style={{ fontWeight: 'bold'}}>{msg.Author} </div> {/* make Author bold */}
                <div style={{ color: '#AAAAAA' }} >{msg.TimeStamp}</div> {/* make TimeStamp light-grey */}
              </div>
              <div>{msg.Message}</div> {/* make Message direct under Author  */}
            </div> :
            <div><strong>{msg.Author}</strong> <br /> {msg.Message} </div>}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        placeholder="Type a message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        style={{ marginTop: '0.5rem', width: '80%' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '0.5rem' }}><MdSend /></button>
    </div>
  );
}

export default App;