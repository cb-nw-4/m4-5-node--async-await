import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

function App() {
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
    <div>
      <h1>Choose a Joke</h1>
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
      {joke && !loading && <div>{joke}</div>}
      {loading && <div>loading...</div>}
    </div>
  );
}

const Button = styled.button`
  text-transform: capitalize;
`;

export default App;

// 1. drop down 3:
