import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./assets/styles/App.css";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import Shop from './pages/Shop';
import Category from './pages/Categories';
import Pay from './Pay';
import Success from './Success';
import Checkout from './pages/checkout';




function App() {
  
  const [pathname, setPathname] = useState(window.location.pathname)

  document.addEventListener('click', () => {
    let pathtemp = window.location.pathname
    
    console.log("Premier : ",window.scrollY)


    if(pathname != pathtemp ){
      console.log("Changement")
      setPathname(pathtemp)

      window.scrollTo = 0
      console.log("Second : ",window.scrollY)
    }

    console.log("Dans addEventListener : ",pathname)
  })

  

  // useEffect( () => {

  // }, [pathname])


  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/boutique"><Shop/></Route>
        <Route path="/categorie"><Category/></Route>
        <Route path="/detail/:name"><Single/></Route>
        <Route path="/panier"><Cart/></Route>
        <Route path="/commande"><Checkout/></Route>
        <Route path="/pay"><Pay/></Route>  
        <Route path="/success"><Success/></Route>
      </Switch>
    </Router>
  );
}

export default App;
