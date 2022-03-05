import React from 'react';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Categories from './../components/Categories';
import BestSell from './../components/BestSell';
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Categories/>
        <BestSell/>
        <NewsLetter/>
    </div>
  )
}

export default Home;