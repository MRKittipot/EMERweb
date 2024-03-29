import './App.css';
import { Route,Routes } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Login from './Page/Login';
import Home from './Page/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Home" element={<Home />}/>
    </Routes>
    </>
  );
}

export default App;
