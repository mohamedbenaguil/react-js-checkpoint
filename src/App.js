
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Login from './components/Login';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Card/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>

      </Routes>
      
      
      </div>
  );
}

export default App;
