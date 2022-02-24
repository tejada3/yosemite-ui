import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material";
import yosemite from "./assets/LA6IXZ.jpg"

function App() {

    const useStyles = makeStyles((theme:Theme) => ({
        div:{
            backgroundImage: `url(${yosemite})`,
        },
        route:{
            // width: "fit-content"
        }


    }));
    const classes = useStyles();
    //@ts-ignore
    return (
      <>
          <Router >
              <div className={classes.route}>
              <PrimarySearchAppBar />


              <div className={classes.div}>

                  <DailtInfo />

              </div>

              </div>
          </Router>
      </>
  );
}

export default App;
