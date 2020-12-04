import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    margin-top: 200px;
`;

const ChooseText = styled.h1`
    font-size: 70px;
    color: rgb(21, 198, 209);
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 50px;
    color: rgb(245, 90, 196);

    &:hover {
        color: rgb(115, 229, 164); 
    }
`;

const MainPage = () => {
    return(
        <>
            <Container>
            <ChooseText>Choose your joke!</ChooseText> 
            <StyledLink to='/joke/dad'>Dad Jokes 😆</StyledLink>
            <StyledLink to='/joke/tronald'>Tronald Jokes 😂</StyledLink>
            <StyledLink to='/joke/geek'>Geek Jokes 😎</StyledLink>
            </Container>
        </>
    );
}

export default MainPage;