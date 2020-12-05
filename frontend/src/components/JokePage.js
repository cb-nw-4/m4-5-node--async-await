import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    font-family: 'Roboto', sans-serif;
`;

const Header = styled.h1`
    font-size: 60px;
    color: rgb(245, 90, 196);
`;

const Joke = styled.p`
    margin: 0 150px;
    font-size: 30px;
    text-align: center;
    color: rgb(21, 198, 209); 
`;

const JokePage = () => {
    const { type } = useParams();
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetch(`/joke/${type}`)
            .then((res) => res.json())
            .then((json) => {
                setJoke(json.joke);
            })
    },[])

    return (
        <>{joke && (
            <Container>
            <Header>{`Here is a random ${type} joke to make you smile 🤣`}</Header>
            <Joke>{joke}</Joke>
            </Container>
        )}
        </>
    );
}

export default JokePage;