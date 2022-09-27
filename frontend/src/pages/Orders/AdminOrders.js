import React from 'react';
import {Link} from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons"

import MenuSideBar from '../../components/Layouts/MenuSideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';
import Pagination from '../../components/Utils/Pagination';

const AdminOrders = () => {
  
    return (
    <React.Fragment>
        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <MenuSideBar/>
            </div>

            <div className="divContentAccount">
                <div className="divPanelHead">
                    <h1>Tous les commandes</h1>
                    
                    <form action="">
                        <input type="text" placeholder="Recherche..."/>
                    </form>
                    
                    <form action="">
                        <select name="" id="">
                            <option value="">Veuillez choisir un filtre</option>
                        </select>
                    </form>
                    
                    <Link to="nouvelle_commande">Ajouter une commande</Link>
                </div>

                <div className="divOrdesList">
                <table id="table-user-orders">
                    <thead>
                        <tr>
                            <th>N° Commande</th>
                            <th>Date de création</th>
                            <th>Nombre de Produits</th>
                            <th>Payement</th>
                            <th>Montant</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            [1,2,3,4,5,6,1,1,1,1].map(element => {
                                return <tr>
                                <td><Link to="commander"><EyeOutlined/> 768627GFFGJHG</Link></td>
                                <td>22/11/2022</td>
                                <td>3 articles</td>
                                <td>Visa</td>
                                <td>24 000 FCFA</td>
                                <td>Encours</td>
                                <td className="tdActions">
                                    <Link> <EditOutlined/></Link>
                                    <Link><CheckOutlined/></Link>
                                    <Link><DeleteOutlined/></Link>
                                </td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

           <Pagination/>

            </div>
        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default AdminOrders;