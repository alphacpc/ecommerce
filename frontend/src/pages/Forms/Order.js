import React from 'react';

import FormCommande from '../../components/Forms/FormCommande';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import MenuSideBar from '../../components/Layouts/MenuSideBar';

import "./../../assets/styles/Forms.css";

const Order = () => {
  return (
    <React.Fragment>
        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <MenuSideBar/>
            </div>

            <div className="divContentAccount">
                <div className="divPanelHead">
                    <h1>Ajouter une commande</h1>
                </div>
                <FormCommande/>
            </div>
        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default Order;