
import React from "react";
import "./search.css";
import { useSearchParams } from 'react-router-dom';
import ListTrack from "../listTrack/listTrack";


export default function Search(){
    const [urlSearchParams, setUrlSearchParams] = useSearchParams();
    const keyWord = urlSearchParams.get('q');
    return(
        <div className="search-container">
            <div className="search-paper">
            <div className="search-header">Search results for "{keyWord}"</div>
            <div className="search-body">
                <ListTrack queryUrl={`api/track/?q=${keyWord}`}/>
            </div>
            </div>
        </div>
    )
}