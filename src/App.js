import React, { useEffect, useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';
import './Darkmode.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(null);
  const bottomRef = useRef(null);
  const Author = "";

  useEffect(() => {
    // Connect to the WebSocket backend
    socketRef.current = new WebSocket('ws:localhost:5125/chat');

    socketRef.current.onopen = () => {
      setConnected(true);
      console.log('Connected to chat server');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(data);
    };

    socketRef.current.onclose = () => {
      setConnected(false);
      console.log('Disconnected from chat server');

      // folgendes ist temporär zum designen
      const data = [
        { Author: 'Ben', Message: 'test1 tim', TimeStamp: '2025-05-05T15:07:31.4378781Z' },
        { Author: Author, Message: 'Moin Ben. Es klappt!', TimeStamp: '2025-05-05T15:45:08.9841532Z' },
        { Author: 'Ben', Message: 'test13', TimeStamp: '2025-05-05T17:00:50.2074785Z' }
      ];
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
      {connected ?
        <div>
          <h2>Chat</h2>
          <div className='chat-box'>
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div className={`chat-message ${msg.Author === Author ? 'own' : 'other'}`}>
                  <div className="chat-bubble">
                    <div className="chat-meta">
                      <div className="chat-author">{msg.Author}</div>
                      <div className="chat-time">{formatTime(msg.TimeStamp)}</div>
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
        :
        <div>
          <h1>
            Der Chat-Server ist nicht erreichbar!
          </h1>
          <p>Bitte laden Sie die Seite neu</p>
          <p> Hilfe finden Sie unter: <a href="https://de.wikipedia.org/wiki/42_(Antwort)">Hilfe</a> </p>
        </div>
      }
    </div>
  );
}

function formatTime(time) {
  const year = time.substring(0, 4);
  const month = time.substring(5, 7);
  const day = time.substring(8, 10);
  return '' + day + '.' + month + '.' + year;
}

export default App;