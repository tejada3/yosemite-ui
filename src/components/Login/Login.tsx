import {Box, Button, Container, TextField, Theme} from "@mui/material";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../../remote/UserPool";
import {makeStyles} from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux'
import {authState, loginUserReducer} from "../../state-slices/auth/auth";
import {useNavigate} from "react-router-dom"
import {setFailureMessage, setSuccessMessage, showSnackbar } from "../../state-slices/error/error-slice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const history = useNavigate();

    const useStyles = makeStyles((theme:Theme) => ({
        loginDiv:{
            textAlign:'center',
            backgroundColor: 'rgba(230, 255, 230, 0.80)',
            marginTop: 20,
        },
        button:{
            marginTop:40
        },
        hr:{
            margin:10
        }
    }));

    const classes = useStyles();
    const onSubmit = (event: any) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                dispatch(loginUserReducer(data));
                console.log("onSuccess: ", data);
                dispatch(setSuccessMessage())
                dispatch(showSnackbar("Welcome"))
                history('/');

            },
            onFailure: (err) => {
                console.error("onFailure: ",err);
                dispatch(setFailureMessage())
                dispatch(showSnackbar(err.message))
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            }
        });
    };

    return (
        <>
            <Container style={{width:'30em' ,justifyContent: 'center', height: '100em'}}>

                <form onSubmit={onSubmit}>
                    <div className={classes.loginDiv}>

                        <br/>
                        <h1  style={{color: '#4E3E61 ' ,  textAlign: 'center' ,fontFamily:"Emilys Candy"}}><b> <span  >LOGIN</span> </b></h1>
                        <hr className={classes.hr}/>
                        <br/>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    variant="filled"
                                    onChange={(event)=>setEmail(event.target.value)}
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Password"
                                    variant="filled"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(event)=>setPassword(event.target.value)}
                                />
                            </div>

                        </Box>

                        <Button type="submit" variant="contained" color="success">
                            Login
                        </Button>
                        <br/>
                        <p></p>
                        <Button onClick={()=>history("/register")} variant="text" color="primary" className={classes.button}>
                            Register
                        </Button>
                        <hr/>

                    </div>


                </form>
            </Container>
        </>
    );

};
export default Login;
