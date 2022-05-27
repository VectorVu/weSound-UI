import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import NavBar from "./component/NavBar/NavBar";
import Slider from "./component/Slider/Slider";
import Track from "./component/Track/Track";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Track></Track>
    </>
    
  
  );
}

export default App;
