import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/styles/Categories.css";
import { categories } from '../../Datas';

const CategoryItem = styled.div`
    background: linear-gradient(to right, #00000048, #00000060),url(${(props) => props.bg});
    background-position: center;
    background-repeat: no-repeat;
`;


const Categories = () => {

    return (
        <div className="categoryContainer">
            <h2>toutes nos catégories</h2>

            <div className="divCategory">
                {
                    categories.map((category,index) => (
                        <CategoryItem key={index} className={`categoryItem ${category.classname}`} bg={category.img}>
                            <h3>{category.title}</h3>
                            <p>{category.desc}</p>
                            <Link to={`/categorie?nom=${category.title}`}>Voir plus</Link>
                        </CategoryItem>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;