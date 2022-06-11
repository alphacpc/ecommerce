import React from 'react';
import { Link} from 'react-router-dom';
import {ShoppingOutlined} from "@ant-design/icons";
import "./../assets/styles/Navbar.css";



const Navbar = () => {


  return (
    <div className="navbarContainer">
        <div className="divLogoHeader">
            <Link to="/"><span>bydoo.</span></Link>
        </div>
        <div className="divLinkAuth">
            <Link to="/">Accueil</Link>
            <Link to="/boutique">Boutique</Link>
            <Link to="/">s'inscrire</Link>
            <Link to="/">s'identifier</Link>
            <Link to="/panier"><ShoppingOutlined/></Link>
        </div>
    </div>
  )
}

export default Navbar;