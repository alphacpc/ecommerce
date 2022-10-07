import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';



import MenuSideBar from '../../components/Layouts/MenuSideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';
import Pagination from '../../components/Utils/Pagination';

import "../../assets/styles/users.css"

const AdminUserList = () => {

    const [ users, setUsers ] = useState([])

    const fetchUsers = async () => {
        const response = await (await axios.get('/users')).data

        setUsers(response)
    }

    useEffect( () => {

        fetchUsers()
    
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
                    <h1>Listes des utilisateurs</h1>
                    <form id="formSearch">
                        <input placeholder='Recherche...'/>
                    </form>

                    <form id="formGroup">
                        <select id="" name="Hello">
                            <option id="" name="hello">Hello</option>
                            <option id="" name="hello">World</option>
                            <option id="" name="hello">Junior</option>
                            <option id="" name="hello">Data</option>
                        </select>
                    </form>
                </div>

                <div className="divUsers">
                    { users.map((user, ind) => {
                        return <div className="divUser" key={ind}>
                            <UserOutlined className="circleUser"/>
                            <h2>{ user["userFname"] } { user["userLname"] }</h2>
                            <div>
                                <span>+1 Point(s)</span>
                                <Link to={`/detail/utilisateur/${user["_id"]}`}><EyeOutlined/> Voir plus</Link>
                            </div>
                        </div>
                    })}
                </div>

                <Pagination/>

            </div>

        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default AdminUserList;