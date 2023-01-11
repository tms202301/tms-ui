//import logo from './logo.svg';
import './App.css';
import './main/css/tms.css';
import LeftMenu from './main/LeftMenu.js';
import HeaderContent from './main/HeaderContent';
import Home from './main/components/Home';
import Tournament from './main/components/Tournaments';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as UiPaths from './main/controller/UiPaths';
import TnCreate from './main/components/TournamentCreate';

function App() {
  return (
    <BrowserRouter>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<LeftMenu />}>
        <Route index element={<Home />} />
        <Route paht={UiPaths.TOURNAMENT_CREATE_PATH} element={<TnCreate />} />
        <Route path={UiPaths.TOURNAMENT_PATH} element={<Tournament />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
