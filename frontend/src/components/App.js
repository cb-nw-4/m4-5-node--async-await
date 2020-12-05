import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import styled from "styled-components";
import Button from "./Button";
const App = () => {
    return (
       
        <Wrapper>
            <Switch>
                <Route exact path="/joke/:type">
                    <HomePage />
                    <Button  />
                </Route>
            </Switch>
        </Wrapper>
     
    );
}

const Wrapper = styled.div`
background-color:black;
height: 100vh;
width:100%;
margin:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export default App;