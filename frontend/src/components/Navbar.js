import React from 'react';
import { Link} from 'react-router-dom';
import LogoImage from "./../assets/images/logo.png";


const Navbar = () => {
  return (
    <div>
        <div>
            <img src={LogoImage} alt="Logo bydoo"/>
        </div>
        <div>
            <Link to="/">s'inscrire</Link>
            <Link to="/">s'identifier</Link>
        </div>
    </div>
  )
}

export default Navbar;