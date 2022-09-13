import React from 'react';
import {Link} from "react-router-dom";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SlideBar from '../../components/Account/SlideBar';

import InformationUser from '../../components/Account/InformationUser';
import Adresse from '../../components/Account/Adresse';
import DateAccount from '../../components/Account/DateAccount';

import "./../../assets/styles/Account.css"


const Account = () => {
  return (
    <React.Fragment>
      <Navbar/>

        <div className="divAccountContainer">
          <div className="divSlideBar">
            <SlideBar/>
          </div>
          <div className="divContentAccount">
            <div className="divPanelHead">
            <h1>Mes informations</h1>
            <Link to="/moncompte">Modifier</Link>
            </div>

            <InformationUser/>

            <Adresse/>

            <DateAccount/>
            


          </div>
        </div>      

      <Footer/>
    </React.Fragment>
  )
}

export default Account