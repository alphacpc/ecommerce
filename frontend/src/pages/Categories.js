import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import styled from "styled-components";


import { categories, products } from './../Datas';
import "./../assets/styles/DetailCategory.css";

import ProductItem from './../components/ProductItem';




const DivBanner = styled.div`
    background: linear-gradient(to right, #00000048, #00000060),url(${(props) => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    margin-bottom: 100px
`;



const Categories = () => {

  const nameCategory = useHistory().location.search.split('=')[1]


  const [category] = useState(categories.filter(category => category.title == nameCategory)[0])


  window.scrollTo(0, 10)

  return (
    <div className="categoryDetailContainer">
      <Navbar/>

        <DivBanner className='categoryBanner' bg={category.img}>
          <h2>{nameCategory}</h2>
          <hr id="barre"/>
        </DivBanner>

        

        <div className="divProducts">
          {
            products['best-sell'].map((product, ind) => (
              <ProductItem ind={ind} key={ind} product={product} />
            ))
          }

          <div className="divPagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
          
        </div>

      <Footer/>
    </div>
  )
}

export default Categories