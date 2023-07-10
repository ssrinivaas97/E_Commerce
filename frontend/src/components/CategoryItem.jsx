
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { categories } from '../data';
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
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    ${mobile({ marginBottom : "20px" })}
`;



const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to = {`/products/${item.cat}`}>
         <Image src={window.location.origin + item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button >SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem