import React from 'react';
import './App.css';
import { useState } from 'react';
import Form from './form';
let url = 'https://miro.medium.com/max/400/0*BDx9c-URmLEod4Gs.gif'


function App() {
  let [text, setText] = useState("");
  let [textEnt, setTextEnt] = useState(null);

  const handleSubmit = (event) => {
    text = text.toLocaleUpperCase()
    event.preventDefault();
    alert("your text created in Uppercase")
    setTextEnt(text)
    setText("")
  }
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Create Your text Here</h1>
        <img src={url} alt="cat"/><br/>
        <textarea
          value={text}
          rows="10"
          onChange={(e) => setText(e.target.value)}
        ></textarea><br />
        <button type='submit'>Submit</button>
        <br /><br /><br />
      </form>
      <p>{textEnt}</p>
      <div>{<Form/>}</div>
      </div>
    </>
  );
}
export default App
