import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Container = styled.div`
    height: 60px;
    background-color: #ff9551; 
    color: white;
    ${mobile({ height: "50px", width: "100%" })}
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
${mobile({ padding: "10px 0px" })}`;

const Left = styled.div`
flex:1;
display:flex;
align-items: center;
${mobile({ fontSize: "14px" })}`;

const Language = styled.span`
font-size:18px;
cursor:pointer;
${mobile({ display: "none" })}`;

const SearchContainer = styled.div`
    /* border : 0.5px solid lightgray; */
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 25px;
    padding: 5px;

`;

const Input = styled.input`
    border:none;
    ${mobile({ width: "30px" })}
`

const Center = styled.div`
    flex:1;
`;

const Logo = styled.h1`
    font-weight:bold;
    text-align:center;
    ${mobile({ fontSize: "18px" })}
    `;


const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: 2, fontSize: "14px" })}
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
    color: white;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const handleLogout = () => {

    localStorage.clear();
    //window.location.reload(true);

}


const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language> EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: 'black', fontSize: '18', marginLeft: '8px' }} />


                    </SearchContainer>
                </Left>

                <Center>
                    
                    <Logo>POPShop</Logo>
                </Center>

                <Right>
                    <Link to="/aboutus" style={{ textDecoration: 'none' }}>
                        <MenuItem>About Us</MenuItem>
                    </Link>

                    <Link to="/logout" style={{ textDecoration: 'none' }} onClick={handleLogout}>
                        <MenuItem>Logout</MenuItem>
                    </Link>


                    <Link to="/cart">
                        <MenuItem> <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                        </MenuItem>
                    </Link>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar