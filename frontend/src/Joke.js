import React from 'react';
import { useParams } from 'react-router-dom';

const Joke= async()=>{
    const { type }=useParams();
    let newjoke=await fetch(`/joke/${type}`);
    let parsed=newjoke.json();
    console.log(parsed);
    return(
        <>
            <p>blah blah</p>
        </>
    )
}

export default Joke;