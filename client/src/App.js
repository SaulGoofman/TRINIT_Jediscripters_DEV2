import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import VideoCall from './pages/VideoCall';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="videocall" element={ <VideoCall/> } />
      </Routes>
    </div>
  )
}

export default App;
