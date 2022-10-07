import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { products } from "../../Datas";
import axios from 'axios';


import MenuSideBar from '../../components/Layouts/MenuSideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';
import Pagination from '../../components/Utils/Pagination';

import "../../assets/styles/Product.css"


const AdminProductsList = () => {

    const [ products, setProducts ] = useState([])

    const fetchCategories = async() => {
      const response = await (await axios.get("/products")).data
      await setProducts(response)
    }
  
  
    useEffect(() => {
  
      fetchCategories()
      
    },[])
  
    console.log(products)

  return (
    <React.Fragment>
        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <MenuSideBar/>
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
                        products.map( (product, ind) => {
                            return <div className="divProduct" key={ind}>
                                <img src={require("../../assets/images/Produits/montre2.png")} alt={product['productTitle']} />
                                <h2><Link to="/produits">{product["productTitle"]}</Link></h2>
                            </div>
                        })
                    }
                </div>

                <Pagination/>

            </div>
        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default AdminProductsList;