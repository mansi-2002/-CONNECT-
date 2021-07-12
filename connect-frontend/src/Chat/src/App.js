import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message';
import logo from './logo.png';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import  SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import home from './home.svg';

function App() {

  const [username, setUsername] = useState("")
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  useEffect ( () => {

    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id : doc.id, message : doc.data()}) ))
    });

  },[] )

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add ({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    
    setInput("");
  }

  return (
    <div className="App">
      <img className = 'image' src = {logo}/>
      <h1>CONNECT's Chat Room</h1>
      <h2>Welcome, {username}!</h2>

      <a  href = 'https://connect-video-app.netlify.app/'>
        <img className = 'home' src = {home}/>
      </a>

      {/* from */}
      <form className = 'forms'>
      
      <FormControl className="app_formControl">
          <Input 
            className="app_input"
            placeholder="Enter a message..."
            value={input}
            onChange={handleInputChange}
          />
        
        <IconButton 
            className="app_formControl_iconButton"
            disabled={!input}
            variant="contained"
            color="primary" 
            type="submit" 
            onClick={sendMessage}>
          <SendIcon/>
         </IconButton>
          
      </FormControl>  
      </form>
      
      

      <FlipMove>
        {/* messages */}
      {
        messages.map(({id, message}) => {
          return <Message key = {id} username={username} message={message}/>
        })
      }
      </FlipMove>
    </div>
  );
}

export default App;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.7.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
