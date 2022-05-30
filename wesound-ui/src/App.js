import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './App.css';
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Upload = lazy(()=> import("./pages/upload/upload"));
const Home = lazy(()=> import("./pages/Home/Home"));

function App() {
  return (  
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="upload" element={<Upload/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </Suspense>
    
  );
}

export default App
