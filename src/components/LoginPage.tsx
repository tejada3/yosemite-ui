import {makeStyles} from "@material-ui/core/styles";
import {Box, TextField, Theme} from "@mui/material";


const LoginPage = () => {

    const useStyles = makeStyles((theme:Theme) => ({
        loginDiv:{
            textAlign:'center',
            backgroundColor: 'honeydew'
        }
    }));

    const classes = useStyles();
    return(
        <>
            <div className={classes.loginDiv}>

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
                            label="Username"

                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="Passsword"
                            variant="filled"
                        />



                    </div>
                </Box>

            </div>

        </>
    )
}

export default LoginPage