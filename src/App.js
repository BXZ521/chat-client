import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef(null);
  const Author = 'Benji'

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
            <strong>{msg.Author}</strong>: {msg.Message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        placeholder="Nachricht eingeben..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        style={{ marginTop: '0.5rem', width: '80%' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '0.5rem' }}>Send</button>
    </div>
  );
}

export default App;
