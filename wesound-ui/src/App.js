import "bootstrap/dist/css/bootstrap.min.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './App.css';
import Loader from "./components/loader/loader";
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Upload = lazy(()=> import("./pages/upload/upload"));
const Home = lazy(()=> import("./pages/Home/Home"));
const Profile = lazy(()=> import("./pages/Profile/profile"));

function App() {
  return (  
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="upload" element={<Upload/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </Suspense>
    
  );
}

export default App
