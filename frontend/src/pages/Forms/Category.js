import React from 'react';
import {Link} from "react-router-dom";

import FormCategory from '../../components/Forms/FormCategory';
import Navbar from './../../components/Layouts/Navbar';
import Footer from './../../components/Layouts/Footer';
import MenuSideBar from './../../components/Layouts/MenuSideBar';

import "./../../assets/styles/Forms.css";

const Category = () => {
  return (
    <React.Fragment>

        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <MenuSideBar/>
            </div>

            <div className="divContentAccount">
                <div className="divPanelHead">
                    <h1>Ajouter une nouvelle catégorie</h1>        
                    <Link>Retour</Link>
                </div>

                <FormCategory/>
            </div>
        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default Category;