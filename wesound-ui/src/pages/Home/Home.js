import React from "react";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import Track from "../../components/Track/Track"; 
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
export default function Home(){
    return(
        <>
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
    )
}