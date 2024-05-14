import './App.css';
import Home from './Component/Home/home';
import Login from './Component/Login/login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Component/Register/register';
import DeviceData from './Component/DeviceData/devicedata';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/devicedata' element={<DeviceData/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
