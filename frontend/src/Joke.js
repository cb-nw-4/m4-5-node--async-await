import React from "react";

import styled from 'styled-components';

const Joke = ({ joke, jokeColor})=> {
    
    return(
        <>       
          <JokeText color={ jokeColor } >{joke}</JokeText>
        </>
    );
}

const JokeText = styled.p`
   color: ${props => props.color || "purple"};
   font-size: 24px;
   font-weight: bold;
   padding: 100px 30px;

`;

export default Joke;