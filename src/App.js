import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashbord';
import Login from './pages/Login';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/Register';
import BankDetail from './pages/BankDetail'
import BussinessDetail from './pages/BussinessDetail';
import PickupAddress from './pages/PickupAddress';
import Header from './components/Header';

import './index.css';
// import Multistep from './components/Multistep';


function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <BrowserRouter>
          {/* <div>
            <Multistep />
          </div> */}
          <Routes>
            <Route path='/dashbord' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bank-detail' element={<BankDetail />} />
            <Route path='/bussiness-detail' element={<BussinessDetail />} />
            <Route path='/pickup-address' element={<PickupAddress />} />j
          </Routes>
        </BrowserRouter>
        <ToastContainer />

      </div>
    </>
  );
}

export default App;
