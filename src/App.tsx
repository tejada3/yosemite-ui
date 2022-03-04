import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import PrimarySearchAppBar from "./components/navigation";
import './App.css';
import DailtInfo from "./components/mainPage";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material";
import YoVal from "./static/yoVal.png"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useSelector } from 'react-redux';
import { errorState, hideErrorMessage } from './state-slices/error/error-slice';
import ErrorMessageComponent from './components/utilComponents/ErrorMessageComponent';


function App() {
    const error = useSelector(errorState);

    const useStyles = makeStyles((theme:Theme) => ({


    }));
    const classes = useStyles();


    return (
      <>

          <Router >
              <PrimarySearchAppBar />

                     <Routes>

                        <Route path='/' element={<DailtInfo/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>


                     </Routes>
          </Router>
         <ErrorMessageComponent message={error.errorMessage}/>
      </>

  );
}

export default App;
