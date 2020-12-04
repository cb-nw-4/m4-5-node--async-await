import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Button = ({ setParams}) => {
    const { type } = useParams();
const newJoke = () => {
    window.location.reload()
    const random =  Math.floor(Math.random() * 10 + 1);
    const category = ["dad", "tronald", "geek"];
    let newCategory = category[random];
     newCategory = `${type}`;
    setParams(newCategory);
}

return (<div>
    <Click onClick= {newJoke}>NEW JOKE</Click>
</div>)

}

const Click = styled.button`
background-color:black;
border-radius: 20px;
width:150px;
height:50px;
color:white;
text-decoration:none;
font-family: 'Padauk', sans-serif;
`

export default Button