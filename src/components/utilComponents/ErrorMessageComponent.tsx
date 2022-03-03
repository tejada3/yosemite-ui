import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useEffect } from 'react';


interface ErrorMessage{

    message: string
    // type: string
}

const ErrorMessageComponent = (props: ErrorMessage) =>{
    const [open, setOpen] = React.useState(false);


    useEffect(() => {
        console.log("inside errrrrror message")
        handleClick()
    },)

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };






    return(
        <>

            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
                        {props.message}
                    </Alert>
                </Snackbar>


            </Stack>
            );
        </>
    )
}

export default ErrorMessageComponent
