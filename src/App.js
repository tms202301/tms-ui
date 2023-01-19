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
import Error500 from './main/components/errorpages/Error500';


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
        <Route exact path={UiPaths.PAGE_500} component={Error500}></Route>
      </Switch>  
    </div>
    <div style={{display: "none"}} className="popup_overlay" id="load-mask-id">
      <div className='load-mask-content-cls'>In Progress..</div>
    </div>
  </Router>
  );
}

export default App;
