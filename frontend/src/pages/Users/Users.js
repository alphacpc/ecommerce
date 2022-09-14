import { EyeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import SlideBar from '../../components/Account/SlideBar';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


import "../../assets/styles/users.css"

const Users = () => {
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

                <div className="divPagination">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>N</span>
                </div>

            </div>

        </div>

        <Footer/>
    </React.Fragment>
  )
}

export default Users;