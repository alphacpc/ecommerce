import React from 'react'
import { Link } from "react-router-dom"

const SlideBar = () => {
  return (
    <ul className="listLink">
        <li>
            <Link to="/moncompte">Informations</Link>
        </li>
        <li>
            <Link to="/moncompte">Tableau de Bord</Link>
        </li>
        <li>
            <Link to="/moncompte">Mes commandes</Link>
        </li>
        <li>
            <Link to="/moncompte">Mis à jour</Link>
        </li>
        <li>
            <Link to="/moncompte">Déconnexion</Link>
        </li>
    </ul>
  )
}

export default SlideBar;