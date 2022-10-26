import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import ScribbleUnderline01 from '../icons/ScribbleUnderline01';

const Container = styled.div`
    width:380px;
    height:290px;
    display:flex;
    flex-direction:column;
    //Medium

    @media (min-width:768px) {
    display:flex;
    }

    //Large
    
    @media (min-width:1024px) {
    display:flex;
    }

`;

const Name = styled.h1`
font-family: 'Lora';
font-style: normal;
font-weight: 600;
font-size: 76px;
line-height: 75px;
color: #0C26AE;
margin:0px;

`

const SubHeading = styled.h3`
font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 27px;
color: #0C26AE;
margin:15px 0px 5px 0px;

`


const IntroCard = ({
}) =>{
    const router = useRouter();

    return <Container>
        <SubHeading>Hello Im,</SubHeading>
        <Name>Dawson Gosse.</Name>
        <SubHeading>UI/UX Designer & Creative</SubHeading>
        <ScribbleUnderline01></ScribbleUnderline01>
    </Container>
}

export default IntroCard;