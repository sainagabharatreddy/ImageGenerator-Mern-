import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Loginform from "./pages/Login";
import SignupForm from "./pages/Signup";
import "./App.css";
import Mainpage  from "./mainpage/convert";
import About from "./about";
import Services from "./services"

function App() {


	return (
		<>
			<BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Loginform/>}></Route>
        <Route path='/signup'element={<SignupForm />}></Route> 
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/main' element={<Mainpage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        

      </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
