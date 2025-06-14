import React, { useEffect, useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';
import './App.css';
import config from './config.json';
import EmojiPicker from 'emoji-picker-react';


function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showPicker, setShowPicker] = useState(false);
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
  const Author = config.Author;

  // WebSocket to connect with the server (backend)
  useEffect(() => {
    socketRef.current = new WebSocket(`ws:${config.ServerAddress}/chat`);

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

  // Send a message
  const sendMessage = () => {
    if (!input.trim()) return;

    let addressee = '/@alle';
    if (input.includes('/@')) {
      const indexOfFirstAt = input.indexOf('/@');
      const indexOfFirstSpaceAfterAtString = input.indexOf(' ', indexOfFirstAt);
      addressee = input.substring(indexOfFirstAt, indexOfFirstSpaceAfterAtString)
    }

    const message = {
      Author: Author,
      Message: input,
      TimeStamp: new Date().toDateString(), // redundant
      Addressee: addressee,
    };

    socketRef.current.send(JSON.stringify(message));
    setInput('');
  };

  // Auto-Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Store theme in localstorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Close Emoji-Picker with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowPicker(false);
      }
    };

    // Eventlistenerhandling
    if (showPicker) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showPicker]);

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
                {msg.Author === Author || msg.Addressee === '/@alle' || msg.Addressee === '/@' + Author ?
                  <div className={`chat-message ${msg.Author === Author ? 'own' : 'other'}`}>
                    {msg.addressee}
                    <div className="chat-bubble">
                      <div className="chat-meta">
                        <div className="chat-author">{msg.Author}</div>
                        <div className="chat-time">{formatTime(msg.TimeStamp)}</div>
                      </div>
                      <div className="chat-text"> {msg.Message}</div>
                    </div>
                  </div>
                  : <div />}
              </div>
            ))}
            <div ref={bottomRef} /> {/* Auto-Scroll anchor */}
          </div>

          <div className='message-container'>
            <button
              className='emoji-button'
              onClick={() => setShowPicker((val) => !val)}
              type="button"
            >
              ☺
            </button>
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
          {showPicker && (
            <div className='emoji-picker'>
              <EmojiPicker
                onEmojiClick={(emojiData) => {
                  setInput((prev) => prev + emojiData.emoji);
                  setShowPicker(false); // Picker nach Auswahl schließen
                }}
                theme={darkMode ? 'dark' : 'light'}
              />
            </div>
          )}
        </div>
        :
        <div className='error-container'>
          <h1>
            Der Chat-Server ist nicht erreichbar!
          </h1>
          <p>Bitte starten Sie den Server neu oder laden Sie die Seite neu </p>
          <p> Die Antwort auf Ihre Probleme finden Sie unter: <a href="https://de.wikipedia.org/wiki/42_(Antwort)">Antwort</a> </p>
          <div className='dino-game-container'>
            <iframe
              src="https://chromedino.com/"
              title="Chrome Dino Game"
              scrolling='no'
              loading="lazy"
            ></iframe>
          </div>
        </div>
      }
    </div>
  );
}

// Convert DateTime to a nicer format 
function formatTime(time) {
  const year = time.substring(0, 4);
  const month = time.substring(5, 7);
  const day = time.substring(8, 10);
  const clocktime = time.substring(11, 16);
  return `${day}.${month}.${year} ${clocktime}`;
}

export default App;