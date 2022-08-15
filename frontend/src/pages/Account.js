import React from 'react'

import Navbar from './../components/Navbar';
import Footer from '../components/Footer';

const Account = () => {
  return (
    <React.Fragment>
      <Navbar/>

        <div className="divAccountContainer">
          <div className="divSlideBar">
            <h2>Menu de la barre lattérale</h2>
          </div>
          <div className="divContentAccount">
            <h1>Contenu</h1>
          </div>
        </div>      

      <Footer/>
    </React.Fragment>
  )
}

export default Account