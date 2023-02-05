import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Login/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;
