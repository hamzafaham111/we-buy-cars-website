import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import './App.css';
import Main from './Main';
import Master from './Master';

function App() {
  return (
    <div className="App">
<Router>
<Switch>
  <Route exact={true} path="/" component={Main}/>
  <Route  path="/" component={Master}/>
</Switch>
</Router>
    </div>
  );
}

export default App;
