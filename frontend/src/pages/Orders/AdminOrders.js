import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons"
import axios from 'axios';


import MenuSideBar from '../../components/Layouts/MenuSideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';
import Pagination from '../../components/Utils/Pagination';

const AdminOrders = () => {

    const [ orders, setOrders ] = useState([])

    const fetchOrders = async () => {
        const response = await (await axios.get('/orders')).data

        setOrders(response)
    }

    useEffect( () => {

        fetchOrders()
    
    }, [] )


  
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
                            orders.map( (order,id) => {
                                return <tr key={id}>
                                <td><Link to={ `/detail/commande/${order["_id"]}` }><EyeOutlined/>768627GFFGJHG</Link></td>
                                <td>{ order["dateOrder"] }</td>
                                <td>3 articles</td>
                                <td>{ order["payementOrder"] }</td>
                                <td>{ order["amountOrder"] } FCFA</td>
                                <td>{ order["statusOrder"] }</td>
                                <td className="tdActions">
                                    <Link to="#"><EditOutlined/></Link>
                                    <Link to="#"><CheckOutlined/></Link>
                                    <Link to="#"><DeleteOutlined/></Link>
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