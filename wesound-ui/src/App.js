import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Col, Container, Row } from "react-bootstrap";

import './App.css';
import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar/NavBar";
import Slider from "./component/Slider/Slider";
import Track from "./component/Track/Track";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Container>
          <Row>
            <Col lg={8}>
              <Track></Track>
            </Col>
            <Col lg={4}>
              <Footer></Footer>
            </Col>
          </Row>
      </Container>
      
    </>
=======
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
>>>>>>> origin/master
    
  );
}

export default App
