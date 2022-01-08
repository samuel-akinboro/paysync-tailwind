import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/Home'

function App({displayName}) {
  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}


export default App;
