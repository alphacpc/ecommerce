import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./assets/styles/App.css";

import Home from './pages/Home';

import Shop from './pages/Shop';
import ProductByCategory from './pages/Products/ProductByCategory';
import Single from './pages/Products/DetailProduct';

import Cart from './pages/Cart';

import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import ResetPassword from './pages/Auth/ResetPassword';

import Account from './pages/Account/Account';
import AdminOrders from './pages/Orders/AdminOrders';
import UserOrders from './pages/Orders/UserOrders';

import Pay from './Pay';
import Success from './Success';

import AdminUserList from './pages/Users/AdminUserList';
import AdminProductsList from './pages/Products/AdminProductsList';
import AdminCategoryList from './pages/Products/AdminCategoryList';

import Dashboard from './pages/Account/Dashboard';

import CategoryForm from './pages/Forms/Category'
import ProductForm from './pages/Forms/Product';
import AdminOrderForm from './pages/Forms/Order';

import Sliders from './pages/Account/Sliders';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/boutique"><Shop/></Route>
        <Route path="/categorie"><ProductByCategory/></Route>
        <Route path="/detail/:name"><Single/></Route>
        <Route path="/panier"><Cart/></Route>

        <Route path="/connexion"><Signin/></Route>
        <Route path="/inscription"><Signup/></Route>
        <Route path="/mot_de_passe_oublie"><ResetPassword/></Route>

        <Route path="/moncompte"><Account/></Route>
        <Route path="/commander"><UserOrders/></Route>

        <Route path="/tableau_bord"><Dashboard/></Route>
        <Route path="/bannieres"><Sliders/></Route>
        <Route path="/produits"><AdminProductsList/></Route>
        <Route path="/categories"><AdminCategoryList/></Route>
        <Route path="/commandes"><AdminOrders/></Route>
        <Route path="/utilisateurs"><AdminUserList/></Route>

        <Route path="/nouveau_produit"><ProductForm/></Route>
        <Route path="/nouvelle_categorie"><CategoryForm/></Route>
        <Route path="/nouvelle_commande"><AdminOrderForm/></Route>

        <Route path="/pay"><Pay/></Route>  
        <Route path="/success"><Success/></Route>
      </Switch>
    </Router>
  );
}

export default App;
