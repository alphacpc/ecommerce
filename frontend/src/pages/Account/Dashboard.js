import React from 'react';
import {Link} from "react-router-dom";

import SlideBar from '../../components/Layouts/SlideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';

import "../../assets/styles/Dashboard.css"

import { status, products, categories } from "../../Datas"

const Dashboard = () => {
    return (
        <React.Fragment>
            <Navbar/>

            <div className="divAccountContainer">

                <div className="divSlideBar">
                    <SlideBar/>
                </div>

                <div className="divContentAccount">
                    <div className="divPanelHead">
                        <h1>Tableau de bord</h1>
                    </div>

                    <div className="divStatusCards">
                        { status.map((state, ind) => {
                            return <div className={"divStatusItem " + state["classname"]}>
                                <span>{state["num"]}</span>
                                <h3>{state["label"]}</h3>
                            </div>
                        }) }
                    </div>

                    <div className="divStatProducts">
                        <div className="divCategories">
                            <div className="head">
                                <h2>Mes catégories</h2>
                                <Link to="nouvelle_categorie">Ajouter une catégorie</Link>
                            </div>
                            <div className="cat">
                                { categories.map((cat, ind) => <Link to="#" key={ind}>{cat["title"]}</Link>)}
                            </div>
                        </div>

                        <div className="divMoreVisited">
                            <h2>Les plus visités</h2>
                            { products["best-sell"].slice(0,9).map((product, ind) => <Link key={ind}><img src={product['img']} alt="Product" /></Link>)}
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </React.Fragment>
  )
}

export default Dashboard;