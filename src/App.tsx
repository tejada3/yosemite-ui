import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Theme} from "@mui/material";
import pic from "./static/img.png"
import YoVal from "./static/yoVal.png"
import {FormatAlignJustify} from "@mui/icons-material";
import Navigation from "./components/navigation";
import LoginPage from "./components/LoginPage";

function App() {

    const useStyles = makeStyles((theme:Theme) => ({
        div:{
            backgroundColor: "honeydew",
            backgroundImage: `url(${YoVal})`,
            backgroundRepeat: 'round',

        }

    }));
    const classes = useStyles();


    return (
      <>
          <div className={classes.div}>
          <Router >
              <PrimarySearchAppBar />

                     <Routes>

                        <Route path='/' element={<DailtInfo/>}/>
                         <Route path='/login' element={<LoginPage/>}/>

                     </Routes>

          </Router>
          </div>
      </>
  );
}

export default App;
