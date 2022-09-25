import React from 'react'


import ProductForm from '../../components/Forms/FormProduct'
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import SlideBar from './../../components/Account/SlideBar'

import "./../../assets/styles/Forms.css"



const ProductNew = () => {
  return (
    <React.Fragment>

        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <SlideBar/>
            </div>


            <div className="divContentAccount">
                <div className="divPanelHead">
                    <h1>Ajouter un produit</h1>
                </div>

                <ProductForm/>

            </div>
        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default ProductNew