import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import home from '../assets/home1.png'

function Home() {
    return <Section id='home'>
        <Navbar />
    </Section>
}

const Section = styled.section`
    background-image: url(${home});
    background-color: var(--primary-color);
    background-size: cover; 
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
`;


export default Home;