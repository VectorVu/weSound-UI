import React from "react";
import { trackContext } from "../App";

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