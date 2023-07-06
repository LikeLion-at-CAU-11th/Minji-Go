import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/mypage" element={<Mypage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
