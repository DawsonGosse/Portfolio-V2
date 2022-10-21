import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import NavMenuIcon from '../icons/NavMenuIcon';

const Container = styled.div`
    width:50px;
    height:50px;
    background-color:#0C26AE;
    border-radius: 41.6667px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    right:20px;
    bottom:20px;
    z-index:5;

    animation-duration: 0.5s;
    animation-name: slidein;

    @keyframes slidein {
        from {
            right:-10px;
            bottom:20px;
        }
      
        to {
            right:20px;
            bottom:20px;
        }
      }

    &:hover {
        transform:  scale(1.2);
        transition: all .2s ease-in-out; 
        }

    //Medium
    @media (min-width:768px) {
    display:none;
    }
    //Large
    
    @media (min-width:1024px) {
    display:none;
    }

`;


const NavMenuButton = ({
}) =>{
    const router = useRouter();

    return <Container onClick={()=>router.push("/")}>
        <NavMenuIcon></NavMenuIcon>
    </Container>
}

export default NavMenuButton;