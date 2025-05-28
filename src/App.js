import React, { useEffect, useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(null);
  const bottomRef = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
   if (saved !== null) return saved === 'true';
   return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const Author = "Ben";
  

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
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
  localStorage.setItem('darkMode', darkMode);
}, [darkMode]);

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
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
          {connected ?
            <div>
              <div className='header-bar'>
                <h2>Chat</h2>
                <div className='header-buttons'>
                  <button onClick={toggleDarkMode} className='toggle-theme-btn'>
                    {darkMode ? '☀️ Light' : '🌙 Dark'}
                  </button>
                  <button className='toggle-theme-btn' onClick={() => alert('Noch keine Funktion!')}>
                    ⚙️ Einstellungen
                  </button>
                  <button className='toggle-theme-btn' onClick={() => alert(`Profil von ${Author}`)}>
                    👤 Profil
                  </button>
                </div>
              </div>
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
              <p>Bitte starten Sie den Server neu oder laden Sie die Seite neu </p>
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
  const clocktime = time.substring(11,16);
  return '' + day + '.' + month + '.' + year + ' ' + clocktime;
}

export default App;