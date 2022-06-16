import './App.css';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='d-flex'>
        <div className='left-nav'>
        <SideBar />
        </div>
        <div className='dashboard'>
        <Dashboard/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
