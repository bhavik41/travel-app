import React from "react";
import "./App.css"
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";

const App = () =>{
 return (
    <>
    <Navbar />
    <Home />
    <Main />
    <Footer/>
    </>
 )
}

export default App;