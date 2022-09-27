import React from 'react';
import {Link} from "react-router-dom";
import { categories } from "../../Datas"

import MenuSideBar from '../../components/Layouts/MenuSideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';

const AdminCategoryList = () => {

  return (
    <React.Fragment>
      <Navbar/>

      <div className="divAccountContainer">

        <div className="divSlideBar">
          <MenuSideBar/>
        </div>

        <div className="divContentAccount">
          <div className="divPanelHead">
            <h1>Toutes les catégories</h1>
            <Link to="nouvelle_categorie">Ajouter une catégorie</Link>

          </div>
                  
          <div className="divCategories">
            { categories.map((cat, ind) => <Link to="#" key={ind}>{cat["title"]}</Link>)}
          </div>
        </div>
      </div>

      <Footer/>
    </React.Fragment>
  )

}

export default AdminCategoryList;