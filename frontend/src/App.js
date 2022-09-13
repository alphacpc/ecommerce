import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import "./assets/styles/App.css";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import Shop from './pages/Shop';
import Category from './pages/Categories';
import Checkout from './pages/checkout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Account from './pages/Account/Account';


import Pay from './Pay';
import Success from './Success';





function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/boutique"><Shop/></Route>
        <Route path="/categorie"><Category/></Route>
        <Route path="/detail/:name"><Single/></Route>
        <Route path="/panier"><Cart/></Route>
        <Route path="/commande"><Checkout/></Route>
        <Route path="/connexion"><Signin/></Route>
        <Route path="/inscription"><Signup/></Route>
        <Route path="/mot_de_passe_oublie"><ResetPassword/></Route>
        <Route path="/moncompte"><Account/></Route>
        <Route path="/pay"><Pay/></Route>  
        <Route path="/success"><Success/></Route>
      </Switch>
    </Router>
  );
}

export default App;
