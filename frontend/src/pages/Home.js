import React from 'react';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <h1>Home page</h1>
    </div>
  )
}

export default Home;