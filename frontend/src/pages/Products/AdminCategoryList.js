import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { categories } from "../../Datas";
import axios from 'axios';



import MenuSideBar from '../../components/Layouts/MenuSideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';

const AdminCategoryList = () => {

  const [ categories, setCategories ] = useState([])

  const fetchCategories = async() => {
    const response = await (await axios.get("/categories")).data
    await setCategories(response)
  }


  useEffect(() => {

    fetchCategories()
    
  },[])


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
            { categories.map((cat, ind) => <Link to={`/detail/categorie/${cat['_id']}`} key={ind}>{cat["categoryTitle"]}</Link>)}
          </div>
        </div>
      </div>

      <Footer/>
    </React.Fragment>
  )

}

export default AdminCategoryList;