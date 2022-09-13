import React from 'react';
import {Link} from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons"

import SlideBar from '../../components/Account/SlideBar';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import "../../assets/styles/OrdersUser.css";

const OrdesUser = () => {
  return (
    <React.Fragment>
        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
          <div className="divSlideBar">
            <SlideBar/>
          </div>

          <div className="divContentAccount">
            <div className="divPanelHead">
              <h1>Mes commandes</h1>
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
                        </tr>
                    </thead>

                    <tbody>
                        {
                            [1,2,3,4,5,6,7,8,9,10].map(element => {
                                return <tr>
                                <td><Link to="commander"><EyeOutlined/> 768627GFFGJHG</Link></td>
                                <td>22/11/2022</td>
                                <td>3 articles</td>
                                <td>Visa</td>
                                <td>24 000 FCFA</td>
                                <td>Traité</td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>


            <div className="divPagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span className="etc">...</span>
                <span>10</span>
            </div>

          </div>

        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default OrdesUser;