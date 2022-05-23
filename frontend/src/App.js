import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./assets/styles/App.css";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import Shop from './pages/Shop';
import Category from './pages/Categories';
import Pay from './Pay';
import Success from './Success';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/boutique" exact><Shop/></Route>
        <Route path="/categorie" exact><Category/></Route>
        <Route path="/detail/:name" exact><Single/></Route>
        <Route path="/panier" exact><Cart/></Route>
        <Route path="/pay"><Pay/></Route>  
        <Route path="/success"><Success/></Route>
      </Switch>
    </Router>
  );
}

export default App;
