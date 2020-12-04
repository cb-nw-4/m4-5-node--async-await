
import React, { useState } from "react";
import styled from 'styled-components';
import Joke from './Joke';

function App() {
  const [type, setType] = useState("");
  const [joke, setJoke] = useState("Waiting for a joke..."); 
  const [jokeColor, setjokeColor] = useState("black");

 
  const handleChange = (ev) => {
    setType(ev.target.value);    
  };

  const handleClick = () => {   
    if (type === "")
      return;

    fetch(`/joke/${type}`)
    .then((res) =>  res.json()) 
   .then((json) => { 
      const { status } = json;
      if (status === 200) {
        setJoke(json.joke);
        const colorArr = ["blue", "green", "GoldenRod", "deeppink", "purple"];   
        setjokeColor(colorArr[Math.floor(Math.random() * 6)]); 
      }
      else {
        setJoke(json.message);
        setjokeColor("red"); 
      }

    })
    .catch(function (error) {
      console.log('Error: ', error);     
  });
     
  };

  return (
    <Container >
      <Header>
        <h1>The joke page</h1>
      </Header>
      <JokeChoiceSection>
        <p>Choose what type of joke you want between <strong>dad</strong>, <strong>geek</strong> and <strong>tronald</strong> jokes:</p>
        <Input
         type="text"
         value={type}
         onChange = {(ev)=>handleChange(ev)}
         placeholder="joke type"        
         />
         <Button onClick={()=>handleClick()}>
           Send
         </Button>
      </JokeChoiceSection>
      <Joke joke={joke} jokeColor={jokeColor}></Joke>
    </Container>
  );
}
const JokeChoiceSection = styled.section`
  display: flex;  
  align-items: center;
  padding: 40px 15px;
`;

const Input = styled.input`
 font-size: 15px;
  height: 20px;
  width: 100px;
  margin: 0 20px;
  padding: 5px;
  border: solid 1px #c9cee7;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(50,57,223,.75);
`;
const Header = styled.header`
  background-color: purple;
  color: white;
  width: 100%;
  text-align: center;
  
`;
const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: purple;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;

`;

export default App;
