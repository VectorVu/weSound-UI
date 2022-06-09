import React from "react";
import { trackContext } from "../pages/detailTrack/detailTrack";

function useTrack(){
    const {track, play, handleSetPlay, handlePlayTrack, setPlay} = React.useContext(trackContext);
    return{
        track,
        play, 
        handleSetPlay, 
        handlePlayTrack,
        setPlay
    }
}
export default useTrack;