import axios from "axios";
import React from "react";
import "./profile.css"
import ListTrack from "../listTrack/listTrack";
import Playlist from "./profile-components/playlist/playlist";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import clsx from 'classnames';

export default function Profile() {
    const [activeList, setActiveList] = React.useState({
        active: "tracks"
    })

    const changeActiveList = (e) => {
        setActiveList({ active: e.id });
    }
    return (
        <div className="profile-container">
            <div className="profile-paper">
                <div className="profile-header">
                    <img className="ava-container" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQNwPW1Oy7FkHy_jT5VHrOvJQkdimFXpYOw&usqp=CAU"></img>
                    <div className="username-container">
                        User Name
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-navbar">
                        <div 
                        id ="tracks"
                        className={clsx({
                            "navbar-item": true,
                            "active": activeList.active === "tracks"
                        })}
                        onClick={(e) => changeActiveList(e.target)}>
                            Tracks
                        </div>
                        <div
                        id="playlists" 
                        className={clsx({
                            "navbar-item": true,
                            "active": activeList.active === "playlists"
                        })} 
                        onClick={(e) => changeActiveList(e.target)}>
                            {/* <Link to="/profile/playlists" style={{textDecoration:"none"}}>Playlists</Link> */}
                            Playlists
                        </div>
                    </div>
                    <div className="list-container">
                        <div className="render-list">
                        
                            <ListTrack/>
                            
                        
                            
                        </div>
                        <div className="liked-List">
                            <div className="likedList-title">Liked List</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 