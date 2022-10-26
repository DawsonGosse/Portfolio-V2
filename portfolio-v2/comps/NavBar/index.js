import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon/Index';

const Container = styled.div`
    width:100%;
    height:56px;
    background-color:#FFF8E4;
    display:none;
    position:relative;
    top:0px;
    justify-content:flex-end;
    z-index:5;

    //Medium
    @media (min-width:768px) {
    display:flex;

    animation-duration: 0.5s;
    animation-name: slideDown;

    @keyframes slideDown {
        from {
            top:-60px;
        }
      
        to {
            top:0px;
        }
      }

    }
    //Large
    
    @media (min-width:1024px) {
    display:flex;
    }

`;

const PrimaryNavContainer = styled.div`
    width:35%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;

const SecondaryNavContainer = styled.div`
    width:33%;
    height:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:50px;
`;

const IconContainer = styled.div`
width:85px;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
`

const Links = styled.a`
    color:#323232;
    font-family: Spartan;
    font-weight: 600;
    font-size: 18px;
    margin:0px 8px 0px 8px;
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:87px;
    height:35px;

    &:hover {
    color:#FFFAFA;
    background: #0C26AE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    }
`;

const NavBar = ({
}) =>{
    const router = useRouter();

    return <Container>
        <PrimaryNavContainer>
            <Links onClick={()=>router.push("/")}>Home</Links>
            <Links onClick={()=>router.push("/")}>Design</Links>
            <Links onClick={()=>router.push("/")}>Gallery</Links>
            <Links onClick={()=>router.push("/")}>About</Links>
        </PrimaryNavContainer>
        <SecondaryNavContainer>
            <IconContainer>
                <LinkedInIcon></LinkedInIcon>
                <GithubIcon></GithubIcon>
            </IconContainer>
        </SecondaryNavContainer>
    </Container>
}

export default NavBar;