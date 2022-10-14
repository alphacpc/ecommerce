import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

import { DeleteOutlined } from "@ant-design/icons"


import Footer from '../../components/Layouts/Footer'
import MenuSideBar from '../../components/Layouts/MenuSideBar'
import Navbar from '../../components/Layouts/Navbar'

import "../../assets/styles/AdminProduct.css"

const AdminProduct = () => {

    const { id } = useParams()
    const [ product, setProduct ] = useState(null)



    const fetchCurrentProduct = async() => {
      const response = await (await axios.get(`/products/find/${id}`)).data
      await setProduct(response)
    }



    useEffect(() => {
  
        console.log("first")
    
        fetchCurrentProduct()

        console.log(product)
      
    },[])

    return (
        <React.Fragment>
            <Navbar/>

            <div className="divOrdersContainer divAccountContainer">
                <div className="divSlideBar">
                    <MenuSideBar/>
                </div>

                <div className="divContentAccount">

                { 
                    (product) ? (<>
                        <div className="divPanelHead">
                            <h1>{product.productTitle}</h1>

                            <Link to="/produits" id="btnAddProduct">Liste des produits</Link>
                        </div>

                        <div className="divProductDetail">
                            <div className="divProductImage">
                                <img src={require("../../assets/images/Produits/jean2.png")} />
                            </div>

                            <div className="divProductInfo">
                                <p>{product.productMarque}</p>
                                <p>{product.productCat}</p>
                                <div className="divPrices promo">
                                    <span>{product.productPrice} FCFA</span>
                                    <span>{product.productPricePromo}</span>
                                    <span>39788 FCFA</span>
                                </div>

                                <p>{ product.productDescShort }</p>
                                
                                <p>{product.productQuantity}</p>
                            </div>

                            <div className="divProductDesc">

                               

                                <div>
                                    <h3>Description longue</h3>
                                    <p>{ product.productDescLong }</p>
                                </div>
                            </div>

                            <div className="divHeadGalery">
                                <h2>Galerie</h2>
                                <button>Ajouter une image</button>
                            </div>

                            <div className="divGallery">
                                {
                                    [1,1,1,1,1].map((el,id) => <div key={id}>
                                    <img src={require("../../assets/images/Produits/jean2.png")} />
                                    <button><DeleteOutlined/></button>
                                </div>)
                                }
                            </div>
                        </div>
                    
                    </>) : <div className='divLoad'>
                        <h2>En chargement</h2>
                    </div>    
                }

                </div>

            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default AdminProduct