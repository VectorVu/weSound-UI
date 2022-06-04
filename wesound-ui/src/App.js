import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import './App.css';
import Loader from "./components/loader/loader";
import request from "./api/request";
import PrivateRoute from "./components/Route/PrivateRoute";
import GuestRoute from "./components/Route/GuestRoute";

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Upload = lazy(() => import("./pages/upload/upload"));
const Home = lazy(() => import("./pages/Home/Home"));
const Profile = lazy(() => import("./pages/Profile/profile"));
const Search = lazy(() => import("./pages/search/search"));


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
  React.useEffect(() => {
    verifyUserInfo();
  }, []);
  console.log(userInfo.data);
  if (userInfo.status === "idle" || userInfo.status === "loading") return <Loader />

  if (userInfo.status === "error") return <div>Error</div>
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute user={userInfo.data}/>} >
          <Route path="upload" element={<Upload />} />

        </Route>
        <Route element={<GuestRoute user={userInfo.data}/>} >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </Suspense>

  );
}

export default App
