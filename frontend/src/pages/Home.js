import React from 'react';
import Navbar from './../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Announcement from './../components/Layouts/Announcement';
import Categories from './../components/Products/Categories';
import BestSell from './../components/Stats/BestSell';
import NewsLetter from '../components/Forms/NewsLetter';


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