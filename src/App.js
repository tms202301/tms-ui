//import logo from './logo.svg';
import './App.css';
import './main/css/tms.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import LeftMenu from './main/LeftMenu.js';
import HeaderContent from './main/HeaderContent';
import Home from './main/components/Home';
import Tournament from './main/components/Tournaments';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import * as UiPaths from './main/controller/UiPaths';
import TournamentCreate from './main/components/TournamentCreate';


function App() {
  return (
    <Router>  
          <div className="App">
          <LeftMenu /> 
          <HeaderContent />
          <Switch>  
                <Route exact path='/' component={Home}></Route>  
                <Route exact path={UiPaths.TOURNAMENT_CREATE_PATH} component={TournamentCreate}></Route>  
                <Route exact path={UiPaths.TOURNAMENT_PATH} component={Tournament}></Route>  
        </Switch>  
          </div>  
       </Router>
  );
}

export default App;
