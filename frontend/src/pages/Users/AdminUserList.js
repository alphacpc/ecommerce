import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined, UserOutlined } from '@ant-design/icons';

import SlideBar from '../../components/Layouts/SlideBar';
import Footer from '../../components/Layouts/Footer';
import Navbar from '../../components/Layouts/Navbar';
import Pagination from '../../components/Utils/Pagination';

import "../../assets/styles/users.css"

const AdminUserList = () => {
  return (
    <React.Fragment>
        <Navbar/>

        <div className="divOrdersContainer divAccountContainer">
            <div className="divSlideBar">
                <SlideBar/>
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
                    { [1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((element, ind) => {
                        return <div className="divUser">
                            <UserOutlined className="circleUser"/>
                            <h2>Luka Modric</h2>
                            <div>
                                <span>+1 Point(s)</span>
                                <Link to="/utilisateurs"><EyeOutlined/> Voir plus</Link>
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