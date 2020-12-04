import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const jokes = ["dad", "geek", "tronald"];
  const handleJoke = async (type) => {
    setLoading(true);
    const jokeResult = await fetch(`/joke/${type}`).then((res) => res.json());
    setJoke(jokeResult.data);
    setLoading(false);
  };
  return (
    <Wrapper>
      <H1>Choose a Joke</H1>
      <ButtonWrapper>
        {jokes.map((jokeType) => {
          return (
            <Button
              disabled={loading}
              onClick={() => {
                handleJoke(jokeType);
              }}
            >
              {jokeType}
            </Button>
          );
        })}
      </ButtonWrapper>
      {joke && !loading && <JokeDiv>{joke}</JokeDiv>}
      {loading && <div>loading...</div>}
    </Wrapper>
  );
};

const JokeDiv = styled.div`
 
`;

const H1 = styled.h1`
  display: block;
  color: white;
  border: 2px solid black;
  box-shadow: 5px 5px 15px 5px #000000;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px #000000;
  padding: 3rem 2rem;
  margin: 2rem;
`;

const Wrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 245, 245, 1) 0%,
    rgba(165, 234, 249, 1) 17%,
    rgba(122, 202, 219, 1) 47%,
    rgba(86, 184, 205, 1) 73%,
    rgba(68, 181, 205, 1) 100%,
    rgba(34, 178, 209, 1) 121%,
    rgba(34, 178, 209, 1) 127%,
    rgba(34, 178, 209, 1) 127%,
    rgba(34, 178, 209, 1) 127%
  );
`;

const Button = styled.button`
  text-transform: capitalize;
  width: 200px;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: darkgray;
  margin: 1rem 0rem;
`;

export default App;

// 1. drop down 3:
