import React from 'react'
import styled from 'styled-components';

const Header= styled.header`
    max-width: 5rem;
    margin: 1rem auto;
    text-align: center;

`;

const H1= styled.h1`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 1em;
    text-align: center;
    font-size: 180%

    

`;

export const Heading = () => {
    return (
        <Header>
            <H1> UNSPLASH CLONE </H1>
            <p> Made with love</p>
            <p> By Shivam Srivastava</p>
        </Header>
    )
}
