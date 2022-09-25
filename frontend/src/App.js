import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import "./assets/styles/App.css";

import Home from './pages/Home';

import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Single from './pages/Single';

import Cart from './pages/Cart';
import Checkout from './pages/checkout';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

import Account from './pages/Account/Account';
import Orders from './pages/Orders/Orders';
import OrdesUser from './pages/Orders/OrdesUser';


import Pay from './Pay';
import Success from './Success';

import Users from './pages/Users/Users';
import Products from './pages/Products/Products';

import Dashboard from './pages/Dashboard';

import Category from './pages/Forms/Category'

import ProductNew from './pages/Forms/Product';
import CommandeNew from './pages/Forms/Commande';

import Sliders from './pages/Account/Sliders';




function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/boutique"><Shop/></Route>
        <Route path="/categorie"><Categories/></Route>
        <Route path="/detail/:name"><Single/></Route>
        <Route path="/panier"><Cart/></Route>
        <Route path="/commande"><Checkout/></Route>
        <Route path="/connexion"><Signin/></Route>
        <Route path="/inscription"><Signup/></Route>
        <Route path="/mot_de_passe_oublie"><ResetPassword/></Route>

        <Route path="/moncompte"><Account/></Route>

        <Route path="/bannieres"><Sliders/></Route>

        <Route path="/tableau_bord"><Dashboard/></Route>

        <Route path="/commandes"><Orders/></Route>
        <Route path="/commander"><OrdesUser/></Route>

        <Route path="/utilisateurs"><Users/></Route>

        <Route path="/produits"><Products/></Route>

        <Route path="/nouvelle_categorie"><Category/></Route>
        <Route path="/nouveau_produit"><ProductNew/></Route>
        <Route path="/nouvelle_commande"><CommandeNew/></Route>

        <Route path="/pay"><Pay/></Route>  
        <Route path="/success"><Success/></Route>
      </Switch>
    </Router>
  );
}

export default App;
