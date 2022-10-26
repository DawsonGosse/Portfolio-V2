import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import ScribbleUnderline02 from '../icons/ScribbleUnderline02';
import Image from 'next/image'
import Runik from '../../public/RunikBackground.png'

const Container = styled.div`
    width:480px;
    height:233px;
    display:flex;
    flex-direction:column;
    z-index:5;
    overflow:hidden;

    &:hover{
    height:260px;
    }

    //Medium

    @media (min-width:768px) {
    display:flex;
    }

    //Large
    
    @media (min-width:1024px) {
    display:flex;
    }

`;

const Title = styled.h5`
font-family: 'Spartan';
font-style: normal;
font-weight: 600;
font-size: 31.92px;
line-height: 36px;
color: #FFFAFA;
margin:0px;
`;

const SubHeader = styled.h6`
font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 18.24px;
line-height: 20px;
color: #FFFAFA;
margin:2px 0px 12px 0px;
`

const ImgCont = styled.div`
overflow:hidden;
width:100%:
height:100%;
position:absolute;
`;

const TextCont = styled.div`
display:none;
width:100%;
height:100%;
z-index:10;



`;

const Card = styled.div`
    width:480px;
    min-height:230px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    position:relative;
    overflow:hidden;
    transform: scale(0.97);
    margin-bottom:3px;

    &:hover {
        transform: scale(0.99);
        transition: linear 0.2s;
        ${TextCont} {
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            align-items:flex-start;
            padding-left:23px;
          }
        ${ImgCont}{
            filter: brightness(50%);
            transition: linear 0.2s;
        }
    }

    //Medium

    @media (min-width:768px) {
    display:flex;
    }

    //Large
    
    @media (min-width:1024px) {
    display:flex;
    }

`;




const ProjectCard = ({
    img = Runik,
    header = "Runik",
    subheader = "UI/UX - Frontend",
    onCardClick =()=>{}
}) =>{
    const router = useRouter();

    return <Container onClick={()=>{onCardClick()}}>
        <Card>
        <TextCont>
            <Title>{header}</Title>
            <SubHeader>{subheader}</SubHeader>
        </TextCont>
        <ImgCont>
            <Image src={img} width={480} height={230} objectFit="cover"></Image>
        </ImgCont>
        </Card>
        <ScribbleUnderline02></ScribbleUnderline02>
    </Container>
}

export default ProjectCard;