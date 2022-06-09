import React from "react";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import Track from "../../components/Track/Track"; 
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavMusic from "../../components/NavMusic/NavMusic";
import useTrack from "../../hooks/useTrack";

export const trackContext = React.createContext()
export default function Home(){

  const [track, setTrack] = React.useState({
    track: 'https://res.cloudinary.com/khong-co/video/upload/v1653902299/audio/Vietsub_Lyrics_Time_machine_-_mj_apanay_feat._aren_park_lpb5bu.mp3',
  })
  const [play, setPlay] = React.useState(false)
  const [currentPlayTrack, setCurrentPlayTrack] = React.useState()

  const [currentTime, setCurrentTime] =React.useState(0)
  const [durationTime, setDurationTime] = React.useState(0)
  function handlePlayPause(){
    if(play){
      currentPlayTrack.pause()
      setPlay(!play)
    }
    else{
      currentPlayTrack.play()
        setPlay(!play)
    }
  }

  function handleSeekTime(time){
    
    currentPlayTrack.seekTo(time)
    setCurrentTime(time)
  }

  React.useEffect(()=>{
    if(currentPlayTrack){
      let durationTime = currentPlayTrack.getDuration()
      setDurationTime(durationTime)
      currentPlayTrack.on('audioprocess', function(){
        let getCurrentTime = (currentPlayTrack.getCurrentTime() * 1 / durationTime)
        setCurrentTime(getCurrentTime)
      })
    }
  })

  React.useEffect(()=>{
    if(currentPlayTrack){
     
    }
    
  },[currentPlayTrack])
  

    return(
      <trackContext.Provider value={{track,
                                     play, 
                                     handlePlayPause, 
                                     setCurrentPlayTrack, 
                                     handleSeekTime,
                                     currentTime,
                                     durationTime}}>
          <Slider/>
        <Container>
          <Row>
            <Col lg={8}>
              <Track />
            </Col>
            <Col lg={4}>
              <Footer></Footer>
            </Col>
          </Row>
        </Container>
        <NavMusic >

        </NavMusic>
       
        
         </trackContext.Provider>
    )
}