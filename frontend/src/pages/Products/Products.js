import React from 'react';
import {Link} from "react-router-dom";
import SlideBar from '../../components/Account/SlideBar';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { products } from "../../Datas";

import "../../assets/styles/Product.css"

const Products = () => {

  return (
    <React.Fragment>
    <Navbar/>

    <div className="divOrdersContainer divAccountContainer">
        <div className="divSlideBar">
            <SlideBar/>
        </div>

        <div className="divContentAccount">
            
            <div className="divPanelHead">
                <h1>Liste des produits</h1>

                <form id="formSearch">
                    <input placeholder='Recherche...'/>
                </form>

                <form action="">
                    <select name="" id="">
                        <option value="">Choisir une catégorie</option>
                    </select>
                </form>

                <Link to="/nouveau_produit" id="btnAddProduct">Ajouter un produit</Link>
            </div>

            <div className="divProducts">
                {
                    [1,1,1,1,1,1,1,1,1].map( (prd, ind) => {
                        return <div className="divProduct" key={ind}>
                            <img src={products["best-sell"][0]["img"]} alt="Products" />
                            <h2><Link to="/produits">Black Crystale</Link></h2>
                        </div>
                    })
                }
            </div>


            <div className="divPagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span className="etc">...</span>
                <span>10</span>
            </div>

        </div>


        



    </div>

    <Footer/>
    </React.Fragment>
  )
}

export default Products;