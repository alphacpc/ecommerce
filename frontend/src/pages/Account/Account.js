import React from 'react';
import {Link} from "react-router-dom";

import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import MenuSideBar from '../../components/Layouts/MenuSideBar';

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
            <MenuSideBar/>
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

export default Account;