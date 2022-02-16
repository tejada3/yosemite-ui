import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Switch} from "react-router-dom";
import { Container} from "react-bootstrap";
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material";

function App() {

    const useStyles = makeStyles((theme:Theme) => ({
        div:{

        }


    }));
    const classes = useStyles();
    //@ts-ignore
    return (
      <>
          <Router >
              <PrimarySearchAppBar />


              <div className={classes.div}> <DailtInfo /></div>
          </Router>
      </>
  );
}

export default App;
