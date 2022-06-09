import axios from "axios";
import React from "react";
import "./profile.css"
import ListTrack from "../listTrack/listTrack";
import Playlist from "./profile-components/playlist/playlist";
import { Routes, Route, Link } from "react-router-dom";
import clsx from 'classnames';
import useAuth from "../../hooks/useAuth";

export default function Profile() {
    const [activeList, setActiveList] = React.useState({
        active: "tracks"
    })

    const changeActiveList = (e) => {
        setActiveList({ active: e.id });
    }
    // React.useEffect(()=>{

    // }, [active])
    const {user}= useAuth();
    return (
        <div className="profile-container">
            <div className="profile-paper">
                <div className="profile-header">
                    <img className="ava-container" src={`${user.avatarUrl}`??''}></img>
                    <div className="username-container">
                       {user.username}
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-navbar">
                        <div
                            id="tracks"
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
                            {/* <Link to="/playlists" style={{textDecoration:"none"}}>Playlists</Link> */}
                            Playlists
                        </div>
                    </div>
                    <div className="list-container">
                        <div className="render-list" >
                            {activeList.active === "tracks" && <ListTrack queryUrl={`/api/track/byuser/${user._id}`}/>}
                            {activeList.active === "playlists" && <Playlist />}
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