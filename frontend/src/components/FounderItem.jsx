
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Desc = styled.p`
margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:white
`;

const FounderItem = ({item}) => {
  return (
    <Container>
         <Image src={window.location.origin + item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
        </Info>
    </Container>
  )
}

export default FounderItem