import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';
import Home from './pages/Home';
import "./assets/styles/App.css";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
          <Home/>
        </Route> 
        <Route path="/pay">
          <Pay/>
        </Route>  
        <Route path="/success">
          <Success/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
