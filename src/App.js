//import logo from './logo.svg';
import './App.css';
import './main/css/tms.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import LeftMenu from './main/LeftMenu.js';
import HeaderContent from './main/HeaderContent';
import Home from './main/components/Home';
import Tournament from './main/components/Tournaments';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import * as UiPaths from './main/controller/UiPaths';
import TmLogin from './main/components/TmsLogin';
import TournamentCreate from './main/components/TournamentCreate';


function App() {
  return (
    <Router>  
          <div className="App">
          <LeftMenu /> 
          <HeaderContent />
          <Routes>  
                <Route exact path='/' element={<Home />}></Route>  
                <Route exact path={UiPaths.TOURNAMENT_CREATE_PATH} element={<TournamentCreate />}></Route>  
                <Route exact path={UiPaths.TOURNAMENT_PATH} element={<Tournament />}></Route>  
        </Routes>  
          </div>  
       </Router>
  );
}

export default App;
