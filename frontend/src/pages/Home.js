import React from 'react';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import Announcement from './../components/Announcement';
import Categories from './../components/Categories';
import BestSell from './../components/BestSell';
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  return (
    <React.Fragment>
        <Navbar/>

        <Announcement/>
        <Categories/>
        <BestSell/>
        <NewsLetter/>
        
        <Footer/>
    </React.Fragment>
  )
}

export default Home;