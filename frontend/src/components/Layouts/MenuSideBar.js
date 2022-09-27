import React from 'react'
import { Link } from "react-router-dom"

const MenuSideBar = () => {
  return (
    <ul className="listLink">
        <li><Link to="/moncompte">Informations</Link></li>
        <li><Link to="/tableau_bord">Tableau de Bord</Link></li>
        <li><Link to="/bannieres">Bannieres</Link></li>

        <li><Link to="/bannieres">Mes catégories</Link></li>

        <li><Link to="/commander">Mes commandes</Link></li>
        <li><Link to="/utilisateurs">Utilisateurs</Link></li>
        <li><Link to="/produits">Produits</Link></li>
        <li><Link to="/commandes">Commandes</Link></li>

        <li><Link to="/moncompte" className="logout">Déconnexion</Link></li>
    </ul>
  )
}

export default MenuSideBar;