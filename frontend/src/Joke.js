import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Joke=()=>{
    const [joke, setJoke]=useState('');
    const {type}=useParams();
    console.log(type);
    useEffect(() => {
        fetch(`/joke/${type}`)
        .then((res)=>{
            console.log(res);
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            return setJoke(data.joke)
        })
    }, []);
    
    console.log(joke);
    return(
        <>{joke&&(   
            <p>{joke}</p>
            )}  
        </>
    )
};

export default Joke;

