import React from 'react'

import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import SlideBar from '../components/Account/SlideBar';

import "./../assets/styles/Account.css"

const Account = () => {
  return (
    <React.Fragment>
      <Navbar/>

        <div className="divAccountContainer">
          <div className="divSlideBar">
            <SlideBar/>
          </div>
          <div className="divContentAccount">
            <h2>Mes informations</h2>
          </div>
        </div>      

      <Footer/>
    </React.Fragment>
  )
}

export default Account