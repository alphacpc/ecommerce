import React from 'react'


import FormCommande from '../../components/Forms/FormCommande'
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import SlideBar from './../../components/Account/SlideBar'

import "./../../assets/styles/Forms.css"


const Commande = () => {
  return (
    <React.Fragment>

        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <SlideBar/>
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

export default Commande