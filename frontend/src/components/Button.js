import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

const Button = () => {
  const history = useHistory();
  const newJoke = () => {
    const random = Math.floor(Math.random() * 2 + 1);
    const category = ["dad", "tronald", "geek"];
    let newCategory = category[random];
    let newUrl = `/joke/${newCategory}`;
    history.replace(newUrl);
    window.location.reload();
  };

  return (
    <div>
      <Click onClick={newJoke}>NEW JOKE</Click>
    </div>
  );
};

const Click = styled.button`
  background-color: white;
  font-weight:bold;
  margin-top:50px;
  font-size:150%;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  color: black;
  text-decoration: none;
  font-family: "Padauk", sans-serif;
`;

export default Button;
