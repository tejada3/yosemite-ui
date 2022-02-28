import { Container } from "@mui/material";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../../remote/UserPool";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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

    // return(
    //     <div>
    //         <form onSubmit={onSubmit}>
                // <label htmlFor="email">Email</label>
                // <input
                //     value={email}
                //     onChange={semail}
                // ></input>
    //             <label htmlFor="password">Password</label>
    //             <input
    //                 value={password}
    //                 onChange={(event) => setPassword(event.target.value)}
    //             ></input>

    //             <button type="submit">Singup</button>
    //         </form>
    //     </div>
    // );
    return (
        <>
        <Container style={{width:'30em' ,justifyContent: 'center' }}>
            <form onSubmit={onSubmit}>
         
                <br/>     
                <br/>    
                <h1  style={{color: '#4E3E61 ' ,  textAlign: 'center' ,fontFamily:"Emilys Candy"}}><b> <span  >REGISTRATION</span> </b></h1> 
                <hr/>
                <br/>    
     
                <h1><b></b></h1>
                <label htmlFor="email">Email: </label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <br/><br/>
                <label htmlFor="Password">Password: </label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <br/><br/>
                <button type="submit">Singup</button>
            </form>
            </Container>
        </>
    );
};

export default Register;