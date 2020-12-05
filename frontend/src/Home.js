import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home=()=>{
    return(
        <>
            <Para>😂Get ready to be tickled!😂</Para>
            <List>
                <StyledLink to="/joke/dad">👨Dad Joke👨</StyledLink>
                <StyledLink to="/joke/tronald">💩Tronald Dump Joke💩</StyledLink>
                <StyledLink to="/joke/geek">🤓Geek Joke🤓</StyledLink>
            </List>
        </>
    )
}

export default Home;

const Para=styled.h1`
    text-align:center;
    padding:70px;
    background-color:#ffd1dc;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size:3em;
`;
const List=styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    text-align:center;
    padding-inline-start: 0;
    
`;

const StyledLink=styled(Link)`
    text-decoration:none;
    font-size:2em;
    margin:15px;
    color:#515254;
    font-weight:666;
`;