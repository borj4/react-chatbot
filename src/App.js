import React, { useEffect, useState } from 'react';
import Respose from './components/Response/Response'
import './App.css';

const App = () => {

  const [response, setResponse] = useState('');
  const [write, setWrite] = useState('')


  const handleButton = async (e) => {
    e.preventDefault();
    await setTimeout(setResponse(""),500);
    setResponse(e.target.user.value)
  }

  // const renderResponse = (input) => {
  //   return <h5 className='response'>{input}</h5>
  // }

  // useEffect(()=>{
  //   setWrite(response)
  //   renderResponse(write)
  // },[response])


  /////// cleaning
  // JSON.parse(<RESPONSE>).text.replace('<br><br>','')
  ////////////////

  return (
    <div className='App'>
    <div className='containerResponse'>
      {response ? <h5 className='response'>{response}</h5> : ""}
    </div>

    <form onSubmit={handleButton}  >
      <input name="user"/>
      <button type='submit'>Enviar</button>
    </form>
    </div>
  )
}
export default App;
