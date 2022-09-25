
import React, { useContext, useState } from "react";
import { CheatSheet } from './context/context'
import classses from "./App.css";
import JavaScript from "./Pages/JavaScript";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";

function App() {
  const [nameClass, setNameClass] = useState("hidden");
  const cheatSheet = useContext(CheatSheet);
  const change = (i) => {
  
    const response = document.getElementById(i);
    response.classList.toggle("hidden");
    response.classList.toggle("item_text");
  }


  return (
    <div className="App">
      <div className="wrapper">
       <BrowserRouter>
         <Navbar/>
         <AppRouter/>
       </BrowserRouter>
       </div>
   </div>
  );
}

export default App;
