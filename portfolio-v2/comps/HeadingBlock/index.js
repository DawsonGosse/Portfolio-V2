import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Container = styled.div`
    width:200px;
    height:80px;
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

const Heading = styled.h2`
font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 31px;
color: #0C26AE;
margin:15px 0px 0px 0px;

`
const SubHeading = styled.h4`
font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: #0C26AE;
margin:5px 0px 0px 0px;

`


const HeadingBlock = ({
    Headingtext = "default",
    Subheadingtext = "Subheading"
}) =>{
    const router = useRouter();

    return <Container>
        <Heading>{Headingtext}</Heading>
        <SubHeading>{Subheadingtext}</SubHeading>
    </Container>
}

export default HeadingBlock;