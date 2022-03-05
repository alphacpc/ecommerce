import React from 'react';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Categories from './../components/Categories';
import BestSell from './../components/BestSell';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Categories/>
        <BestSell/>
    </div>
  )
}

export default Home;