import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react";

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import Logs from "./components/Logs/Logs";
import NewLog from "./components/NewLog/NewLog";
import LogDetails from "./components/LogDetails/LogDetails";



function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <NavBar/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/logs" element={<Logs/>}/>
              <Route path="/new" element={<NewLog/>}/>
              <Route path="/logs/:index" element={<LogDetails/>}/>
            </Routes>
          </main>
        </Router>
      </div>
    </>
  )
}

export default App;
