import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import "./App.css";
import HigherLower from "./components/HigherLower";
import AlertTemplate from "react-alert-template-basic";
import LoveCalculator from "./components/LoveCalculator";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        paddingBottom: "20%"
      }}
    >
      <Router>
        <AlertProvider template={AlertTemplate} {...options}>
          {/* <HigherLower /> */}
          {/* <LoveCalculator /> */}
          <NavBar />
          <Routes />
        </AlertProvider>
      </Router>
    </div>
  );
}

export default App;
