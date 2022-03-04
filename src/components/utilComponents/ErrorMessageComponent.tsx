import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { errorState, hideErrorMessage } from '../../state-slices/error/error-slice';


interface ErrorMessage{

    message: string
    // type: string
}

const ErrorMessageComponent = (props: ErrorMessage) =>{
    const [open, setOpen] = React.useState(false);
    const error = useSelector(errorState);
    const dispatch = useDispatch();


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

                <Snackbar open={error.errorType} autoHideDuration={3000} onClose={()=>{dispatch(hideErrorMessage())}}>
                    <Alert onClose={()=>{dispatch(hideErrorMessage())}} severity={error.errorColor} sx={{ width: '100%' }}>
                        {props.message}
                    </Alert>
                </Snackbar>


            </Stack>

        </>
    )
}

export default ErrorMessageComponent
