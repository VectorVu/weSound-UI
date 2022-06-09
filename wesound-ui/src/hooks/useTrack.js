import React from "react";
import { trackContext } from "../App";

function useTrack(){
    const { handlePlayTrack} = React.useContext(trackContext);
    return{
         
        handlePlayTrack,
      
    }
}
export default useTrack;