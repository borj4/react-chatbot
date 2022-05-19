import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import spinner from './assets/loading.gif';
import './App.css';



const App = () => {
  
  const [value, setValue] = useState('');
  const [botResponse, setBotResponse] = useState('Hello, how can I help you?');
  const [userResponse, setUserResponse] = useState('')
  const [loading, setLoading] = useState(false)
  
  const form = new FormData();

  const options = {
    headers: {
      'content-type': 'multipart/form-data'
    }}

  const handleButton = async (e) => {
    e.preventDefault();
    setUserResponse(e.target.user.value);
    setValue('')
  }

  // const cleanData = (response) => {
  //   response.replace('<br><br>','')
  //   do {response.replace('<br><br>','. ')}
  //   while (response.includes('<br><br>'))
  // }

  useEffect(async()=>{
    setLoading(true)
    try{
      await form.append('variable', userResponse)
      console.log(form);
      await axios.post('http://almesa93.pythonanywhere.com/',form, options)
      // acceder al objeto
      .then(response=>{
        let string
        response.replace('<br><br>','')
        do {response.replace('<br><br>','. ')}
        while (response.includes('<br><br>'))
        return response
      })
      // cleanData(response))
      .then(response=>console.log("la respuesta es "+response))
      .then(response=>setBotResponse(response))
    }
    catch (error) { console.log(error) }
    finally { setLoading(false) }
    
  },[userResponse])


  return (
    <div className='App'>
    <div className='containerResponse'>
      {loading ? <img className="spinner" src={spinner} alt="loading..." /> : <h5 className='response'>{botResponse}</h5>}
    </div>

    <form onSubmit={handleButton}  >
      <input value={value} onChange={e=>setValue(e.target.value)} name="user"/>
      <button type='submit'>Enviar</button>
    </form>
    </div>
  )
}
export default App;
