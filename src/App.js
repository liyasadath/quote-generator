import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import Card from './pages/Card';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookmark' element={<Bookmark/>}/>  
      <Route path='/card' element={<Card/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
