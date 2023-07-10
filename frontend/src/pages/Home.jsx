
import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import MainImage from '../components/MainImage'
import Navbar from '../components/Navbar'
import  Slider  from '../components/Slider'
import Spacer from '../components/Spacer';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <MainImage/>
        <Spacer title="Our Collections"/>
        <Slider />
        <Spacer title="Our Categories"/>
        <Categories/>
        <Spacer title="Our Top Products"/>
        <Products />
        <Spacer title="Subscribe for our Newsletter"/>
        <Newsletter/>
        <Footer/>
        
    </div>
  )
}

export default Home