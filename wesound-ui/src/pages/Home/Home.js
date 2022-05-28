import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";
import Track from "../../components/Track/Track"; 
export default function Home(){
    return(
        <>
         <NavBar/>
        <Slider/>
        <Track/>
        </>
    )
}