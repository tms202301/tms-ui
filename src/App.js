//import logo from './logo.svg';
import './App.css';
import Menu from './main/Menu';
import MainContent from './main/MainContent';

function App() {
  return (
    <div className="App">
      <div className='menucls'>
        <Menu />
      </div>
      <div className='contentcls'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
