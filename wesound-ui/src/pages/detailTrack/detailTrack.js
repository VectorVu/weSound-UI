import React from "react";
import request from "../../api/request";
import { useParams } from "react-router-dom";
import Track from "../../components/Track/Track";
import useAuth from "../../hooks/useAuth";
export default function DetailTrack(){
    const {isAuthenticated} = useAuth();
   

    const {trackId} = useParams();
    return(
        <div>
            detail track {trackId}
            {isAuthenticated ? <input type="text"/> : null}
        </div>
    )
}