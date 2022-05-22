import React from 'react';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined, ArrowRightOutlined} from "@ant-design/icons";

import "./../assets/styles/Shop.css";
import { products } from "./../Datas";


import banner from "./../assets/images/bannerShop2.jpg"

const BannerShop = styled.div`
  
  height:80vh;
  background: linear-gradient(to left, #1b1b1b91, #1a1414ab),url('${(props) => props.bg}') no-repeat;
  background-position: center;
`;

const Shop = () => {



  return (
    <div className="shopContainer">
      <Navbar/>

      <div className="shopBody">

        <BannerShop id="BannerShop" bg={banner}>
          <div className="WelcomeShop">
            <div>
              <h1>Bienvenue sur bydoo.</h1>
              <span></span>
            </div>

            <h2>La fantaisie dans la rigueur. </h2>
          </div> 
        </BannerShop>

        <div className="divContent">
          
          <h2>Acheter en toute simplicité</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consequuntur aspernatur optio quae distinctio, dolores laboriosam similique mollitia repellat earum tenetur. Rem, adipisci repellat. Fuga error id porro vitae omnis!
          Praesentium magni dolor neque mollitia rerum sed, reprehenderit dicta pariatur excepturi ea veniam repellat odio voluptas repudiandae magnam optio nemo commodi maiores corporis laborum, ullam officiis! Ea nesciunt quibusdam fugit.</p>
          


          {
            ["Sacs", "Tshirt", "Montres", "Pull Over", "Jeans"].map((el,index) => (
              <div className="byCartegory" key={index}>
              <h3>{el}</h3>
              <hr id="tiret"/>
              <div className="divProducts">
                {
                  products['best-sell'].map((product, ind) => (
                    <div className="bestItem" key={ind}>
                      <img className={`${product.classname}`} src={product.img} alt={`${product.title}`}/>
                      <div className="divIcons">
                        <SearchOutlined className="loop"/>
                        <HeartOutlined className="heart"/>
                        <ShoppingCartOutlined className="cart"/>
                      </div>
                    </div>
                ))
                }
              </div>

              <div className='divLinkSeeMore'>
                <Link to={`/categorie?nom=${el}`}>Voir plus <ArrowRightOutlined/></Link>
              </div>
            </div>
            ))
          }
          

        </div>


      </div>

      <Footer/>
    </div>
  )
}

export default Shop