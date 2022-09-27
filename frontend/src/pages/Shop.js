import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { products } from "./../Datas";

import Footer from '../components/Layouts/Footer'
import Navbar from '../components/Layouts/Navbar'
import ProductItem from './../components/Products/ProductItem';

import banner from "./../assets/images/bannerShop2.jpg"

import "./../assets/styles/Shop.css";

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
            ["Sacs", "T-shirt", "Montres", "Pull over", "Jeans"].map((el,index) => (
              <div className="byCartegory" key={index}>
                <h3>{el}</h3>

                <hr id="tiret"/>

                <div className="divProducts">
                  {
                    products['best-sell'].map((product, ind) => (
                      <ProductItem ind={ind} key={ind} product={product} />
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

export default Shop;