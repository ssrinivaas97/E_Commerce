import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import { mobile } from '../responsive';


const Container = styled.div`
width: 100vw;
  height: 100vh;
  background-size: cover;
  
  
   background-image: url("https://media.istockphoto.com/id/1255635774/photo/happy-ethnic-shopper-with-paper-bags.jpg?s=612x612&w=0&k=20&c=RpeDEdymaMyUNaLIM4N6sOjvFSmaTwdfsQU_fkhRtUo=");
    `;



const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.payment;
  const cart = location.state.products;
  
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

    useEffect (()=> {
      const createOrder = async () => {
        try {
          console.log(currentUser?.accessToken)
          const res = await axios.post("http://localhost:5001/api/orders", {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          },{ headers: {token: `Bearer `+ currentUser?.accessToken},
         });
          setOrderId(res.data._id);
        } catch(err) {console.log(err) }
      };
      data && createOrder();
      localStorage.clear();
    },[cart,data,currentUser]);
    
  const goToHome = () => {
    navigate("/");
    window.location.reload(true);
  };

  return (
    <Container>
      <Navbar2/>

          <div
      style={{
        fontSize:"25px",
        color:"white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={goToHome}>Go to Homepage and Sign Out!</button>
    </div>
        <Footer/>
    </Container>

  );
};

export default Success;