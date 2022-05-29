import "bootstrap/dist/css/bootstrap.min.css";
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
    
  
  );
}

export default App
