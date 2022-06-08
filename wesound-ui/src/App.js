import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './App.css';
import Loader from "./components/loader/loader";
import request from "./api/request";
import PrivateRoute from "./components/Route/PrivateRoute";
import GuestRoute from "./components/Route/GuestRoute";
import MainRoute from "./components/Route/MainRoute";

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Upload = lazy(() => import("./pages/upload/upload"));
const Home = lazy(() => import("./pages/Home/Home"));
const Profile = lazy(() => import("./pages/Profile/profile"));
const Search = lazy(() => import("./pages/search/search"));
const DetailTrackPage = lazy(() => import("./pages/detailTrack/detailTrack"));
export const authContext = React.createContext();
export const trackContext = React.createContext()

function App() {
  const [userInfo, setUserInfo] = React.useState({
    status: "idle",
    data: null
  });
  const verifyUserInfo = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUserInfo({ status: 'success', data: null });
      return;
    }
    try {
      const res = await request.get('/api/auth/verify');
      if (res.success) {
        setUserInfo({ status: 'success', data: res.data });
      } else {
        setUserInfo({ status: 'success', data: null });
      }
    } catch (error) {
      setUserInfo({ status: 'success', data: null });
    }
  }
  const login = ({ token, preUrl }) => {
    localStorage.setItem('token', token);
    window.location.href = preUrl ?? '';
  }
  const logout = () => {
    localStorage.removeItem('token');
    setUserInfo({ status: 'success', data: null })
  }
  React.useEffect(() => {
    verifyUserInfo();
  }, []);

  const [track, setTrack] = React.useState({
    track: 'https://res.cloudinary.com/khong-co/video/upload/v1653902299/audio/Vietsub_Lyrics_Time_machine_-_mj_apanay_feat._aren_park_lpb5bu.mp3',
  })
  const [play, setPlay] = React.useState(false)


  function handlePlayTrack (wavesurfer){
    wavesurfer.playPause()
    setPlay(!play)
  }
  function handleSetPlay(){
    setPlay(!play)
  }

  if (userInfo.status === "idle" || userInfo.status === "loading") return <Loader />

  if (userInfo.status === "error") return <div>Error</div>
  return (
    <authContext.Provider value={{ user: userInfo.data, login, logout }}>
      <trackContext.Provider value={{track, play, handleSetPlay, handlePlayTrack, setPlay}} >

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainRoute />}>
            <Route element={<PrivateRoute />} >
              <Route path="upload" element={<Upload />} />
              {/* <Route path="tracks" element={<DetailTrackPage />} /> */}
            </Route>
              <Route path="profile" element={<Profile />} />
              <Route path="search" element={<Search />} />
              <Route path="/" element={<Home />} />
              <Route path="track/:trackId" element={<DetailTrackPage />} />
          </Route>
          <Route element={<GuestRoute />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<div>404 Page</div>} />
        </Routes>
      </Suspense>
      </trackContext.Provider>

    </authContext.Provider>
  );
}

export default App
