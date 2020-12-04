import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const HomePage = () => {
const { type } = useParams();
  const [joke, setJoke] = useState([]);
  const [param, setParams] = useState(`${type}`)

  useEffect( () => {
     fetch(`/joke/${type}`, {
        method : "GET"
    })
    .then((res) => res.json())
    .then((data) => {
      setJoke(JSON.stringify(data.data));
    })
    
  }, [])

  return (
    <Div>
          <Title>JOKE GENERATOR</Title>
        <JokeWrapper>
          
      <Joke>{joke}</Joke>
      <Button setParams = {setParams} />
      </JokeWrapper>
    </Div>
  );
};

const Div = styled.div`
font-family: 'Padauk', sans-serif;
background-color: #FAB135;
display:flex;
flex-direction:column;
align-content:center;
align-items:center;
justify-content:center;
height:450px;
`
const Title = styled.h1`
text-align:center;
text-decoration:underline;
text-decoration-thickness:5px;
font-size:250%;
`
const JokeWrapper = styled.div`

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
background-color:white;
margin:auto 0;
height:200px;
width: 800px;
align-content:center;
display:flex;
padding: 50px;
justify-content:center;
text-align:center;
border-radius:100px;
flex-direction:column;

`
const Joke = styled.h2`
color:black;
font-size: 200%;
`

export default HomePage;
