import { Box, Button, Container, TextField, Theme } from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../../remote/UserPool";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            margin:10,
        }
    }));

    const classes = useStyles();

    const onSubmit = (event: any) => {
        event.preventDefault();

        var dataEmail = {
            Name: 'email',
            Value: email
        }

        var emailAttribute = new CognitoUserAttribute(dataEmail);
        var attributeList: CognitoUserAttribute[] = [];
        
        attributeList.push(emailAttribute);

        //@ts-ignore
        UserPool.signUp(email, password, attributeList, null, (err, data) => {
            if(err) {
                console.error(err);
            }
            console.log(data);
        });
    };

    return (
        <>
            <Container style={{width:'30em' ,justifyContent: 'center', height: '100em'}}>

                <form onSubmit={onSubmit}>
                    <div className={classes.loginDiv}>

                        <br/>
                        <h1  style={{color: '#4E3E61 ' ,  textAlign: 'center' ,fontFamily:"Emilys Candy"}}><b> <span  >Register</span> </b></h1>
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
                            Register
                        </Button>
                        <br/>
                        <p></p>
                        <Button onClick={()=>history("/login")} variant="text" color="primary" className={classes.button}>
                            Login
                        </Button>
                        <hr/>

                    </div>


                </form>
            </Container>
        </>
    );
};

export default Register;