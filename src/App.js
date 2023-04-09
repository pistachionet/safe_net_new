// import React, { useState } from 'react'; // useState is a hook
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import LoginRegPage from './pages/LoginRegPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/">
          </Route> */}
          <Route index element={<LoginRegPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="loginreg" element={<LoginRegPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;