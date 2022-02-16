import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Switch} from "react-router-dom";
import { Container} from "react-bootstrap";
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";

function App() {

    //@ts-ignore
    return (
      <>
          <Router >
              <PrimarySearchAppBar />


              <div style={{fontSize: 50}}> <DailtInfo /></div>
          </Router>
      </>
  );
}

export default App;
