import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material";
import YoVal from "./static/yoVal.png"
import LoginPage from "./components/LoginPage";
import Login from "./components/Login/Login";





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
                         <Route path='/login' element={<Login/>}/>

                     </Routes>

          </Router>
          </div>


      </>
  );
}

export default App;
