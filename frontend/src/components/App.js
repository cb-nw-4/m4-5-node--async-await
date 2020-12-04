import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import styled from "styled-components";
const App = () => {
    return (
        <BrowserRouter>
        <Wrapper>
            <Switch>
                <Route exact path="/joke/:type">
                    <HomePage />
                </Route>
            </Switch>
        </Wrapper>
        </BrowserRouter>
    );
}

const Wrapper = styled.div`
background-color:#1B5396;
height: 100vh;
margin: -10px;
`
export default App;