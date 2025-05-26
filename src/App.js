import React, { useEffect, useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';
import './Darkmode.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef(null);
  const bottomRef = useRef(null);
  const Author = "Ben";

  useEffect(() => {
    // Connect to the WebSocket backend
    socketRef.current = new WebSocket('ws://localhost:5125/chat');

    socketRef.current.onopen = () => {
      console.log('Connected to chat server');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(data);
    };

    socketRef.current.onclose = () => {
      console.log('Disconnected from chat server');

      // folgendes ist temporär zum designen
      const data = [
        { Author: 'Benji', Message: 'test1 tim', TimeStamp: '2025-05-05T15:07:31.4378781Z' },
        { Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },
        { Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },
        { Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },
        { Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },
        { Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },

        { Author: Author, Message: 'Moin Benji. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },
        { Author: 'Benji', Message: 'test13', TimeStamp: '2025-05-05T17:00:50.2074785Z' }
      ];
      console.log(data)
      setMessages(data);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

   useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const message = {
      Author: Author,
      Message: input,
      TimeStamp: new Date().toDateString(),
    };

    socketRef.current.send(JSON.stringify(message));
    setInput('');
  };

  return (
    <div className='app'>
      <h2>Chat</h2>
      <div className='chat-box'>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <div className={`chat-message ${msg.Author === Author ? 'own' : 'other'}`}>
              <div className="chat-bubble">
                <div className="chat-meta">
                  <div className="chat-author">{msg.Author}</div>
                  <div className="chat-time">{msg.TimeStamp}</div>
                </div>
                <div className="chat-text">{msg.Message}</div>
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} /> {/* Auto-scroll anchor */}
      </div>
      
      <div className='message-container'>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className='input-message'
        />
        <button onClick={sendMessage} className='button-send'><MdSend /></button>
      </div>
    </div>
  );
}

export default App;