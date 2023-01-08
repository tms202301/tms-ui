//import logo from './logo.svg';
import './App.css';
import './main/css/tms.css';
import LeftMenu from './main/LeftMenu.js';
import MainContent from './main/MainContent';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContent />
    </div>
  );
}

export default App;
