import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import FounderItem from '../components/FounderItem';
import Navbar2 from '../components/Navbar2';
import { mobile } from "../responsive";
import { founders } from '../data';

const Container = styled.div``;
const Slide = styled.div`
width: 100vw;
  height: 150vh;
display: flex;
align-items: center;
justify-content: center;
overflow-x:none;
background-image:url('/assets/AboutUs.jpg');
background-size:cover;
background-repeat: no-repeat;
`;

const Slide2 = styled.div`
width: 100vw;
  height: 150vh;
display: flex;
align-items: center;
justify-content: center;
overflow-x:none;
background-image:url('/assets/AboutUs2.jpg');
background-size:cover;
background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 35px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ marginTop: "-100px" })}
`;

const InfoContainer = styled.div`
 width: 100%;
    height: 15vh;
    display: flex;
    background-color: #6FEDD6;
    color: white;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ fontSize: "25px" })}`;

const Desc = styled.p`
margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  border-bottom: 5px white solid;
`;

const FContainer = styled.div`
width:100%;
height: 600px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;



const AboutUs = () => {
    return (
        <Container>
            <Navbar2 />
            <Announcement />
            <Slide>
                <Title>About POPShop&trade;.</Title>
            </Slide>
            <InfoContainer>
                <Desc>POPShop is a leading social marketplace for new style for women,
                    men, home,
                    and more</Desc>
            </InfoContainer>
            <InfoContainer>
            <Desc>Our Founders</Desc>
            </InfoContainer>
            <FContainer>
            {founders.map(item => (
            <FounderItem item ={item} key={item.id}/>
            ))}
            </FContainer>
            <InfoContainer>
                <Desc>Our mission is to put people at the heart of commerce, empowering everyone to thrive.</Desc>
            </InfoContainer>
            <Slide2>
                <Title>Join our revolution !</Title>
            </Slide2>

            <Footer />
        </Container>
    )
}

export default AboutUs