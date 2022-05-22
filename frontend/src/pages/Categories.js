import React, {useState} from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import styled from "styled-components";
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined} from "@ant-design/icons";


import { categories, products } from './../Datas';
import "./../assets/styles/DetailCategory.css";



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

  const [category] = useState(categories[2])


  return (
    <div className="categoryDetailContainer">
      <Navbar/>

        <DivBanner className='categoryBanner' bg={category.img}>
          <h2>{category.title}</h2>
          <hr id="barre"/>
        </DivBanner>

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
            </div>))
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