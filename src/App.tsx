import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Theme} from "@mui/material";
import pic from "./static/img.png"
import YoVal from "./static/yoVal.png"
import {FormatAlignJustify} from "@mui/icons-material";

function App() {

    const useStyles = makeStyles((theme:Theme) => ({
        div:{
            backgroundColor: "honeydew",
            backgroundImage: `url(${YoVal})`,
            backgroundRepeat: 'round',

        },
        route:{
            // width: 'max-content'
        }


    }));
    const classes = useStyles();


    return (
      <>

          <Router >
              <div className={classes.div}>

                  <PrimarySearchAppBar />
                  <DailtInfo />

              </div>
          </Router>

      </>
  );
}

export default App;
