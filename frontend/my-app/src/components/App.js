
import './App.css';
import React, { useState } from "react";
import request from 'request';
import dad from './images/dad.png'




function App() {

  const [joke, setJoke] = useState('');

  const img1= require('./images/dad.png');
  console.log('img', img1)
  // const [emoji, setEmoji] = useState('')



  const handleClick =(type) =>{
      console.log(`/joke/${type}`)
    fetch(`/joke/${type}`)
      .then((res) => 
        res.json()
        )
      .then((json) =>{
        setJoke(json.joke)

      })

    // setEmoji(type)

    // console.log('emoji', emoji)

  }



  return (
    <div className='App-Container'>
      <h3>
        {joke}
      </h3>
      <ul className='list'>
        <button onClick={() => handleClick('dad')}>Dad joke</button>
        <button onClick={() => handleClick('tronald')}>Trump Joke</button>
        <button onClick={() => handleClick('greek')}>Greek joke</button>
        
      </ul>

      <img className='App-img' src={dad} alt='emoji img' />

      </div>
  
    
  );
}

export default App;
