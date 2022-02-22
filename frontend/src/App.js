import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <h1>Payement</h1>
        </Route>  
        <Route path="/success">
          <h1>Success</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
