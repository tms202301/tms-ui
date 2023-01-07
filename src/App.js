//import logo from './logo.svg';
import './App.css';
import LeftMenu from './main/LeftMenu.js';
import MainContent from './main/MainContent';

function App() {
  return (
    <div className="App">
      <div className='menucls'>
        <LeftMenu />
      </div>
      <div className='contentcls'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
