import React from 'react';
import styled from "styled-components";
import "./../assets/styles/Categories.css";
import { categories } from './../Datas';

const CategoryItem = styled.div`
    background: linear-gradient(to right, #00000048, #00000060),url(${(props) => props.bg});
    background-position: center;
    background-repeat: no-repeat;
`;


const Categories = () => {

    console.log(categories)

    return (
        <div className="categoryContainer">
            <h2>toutes nos catégories</h2>

            <div className="divCategory">
                {
                    categories.map((category,index) => (
                        <CategoryItem key={index} className={`categoryItem ${category.classname}`} bg={category.img}>
                            <h3>{category.title}</h3>
                        </CategoryItem>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;