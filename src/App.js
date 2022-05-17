import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './utils/chatBotConfig/config';
import MessageParser from './utils/chatBotConfig/MessageParser';
import ActionProvider from './utils/chatBotConfig/ActionProvider'

import './App.css';

const App = () => {

  const [count] = useState(1);
  const [userResponse, setUserResponse] = useState('');

  return (
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
    />
  )
}
export default App;
