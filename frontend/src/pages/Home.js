import React from 'react';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Categories from './../components/Categories';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Categories/>
    </div>
  )
}

export default Home;