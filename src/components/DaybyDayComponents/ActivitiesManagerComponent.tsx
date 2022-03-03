import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {makeStyles} from "@material-ui/core/styles";
import {TextField, Theme} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ErrorMessageComponent from '../utilComponents/ErrorMessageComponent';
import { render } from 'react-dom';
import { useState } from 'react';
import {activitesReducer} from "../../state-slices/DaytoDay/Activites"
import { useDispatch } from 'react-redux'


const ActivitiesManagerComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [day, setday] = React.useState('');
    const [message, setmessage] = React.useState('');
    const [value, setValue] = React.useState('Add Here');

    let history = useNavigate();
    const dispatch = useDispatch();

    
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'honeydew',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };
   

    const useStyles = makeStyles((theme:Theme) => ({
        button:{
            backgroundColor: 'honeydew',
            textAlign: 'center'
        }
    }));

    const classes = useStyles();

    const handleChangeDay = (event: SelectChangeEvent) => {
        setday(event.target.value);
        console.log(event.target.value)
    }

    const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setmessage(event.target.value)
        console.log(event.target.value)
    };

    async function addEventf() {

        try{
            const response = await axios.put('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/event',{"message": message,
                    "day": day});

            console.log(response.data)
            setErrorMessage("added event successfullyy")



        }catch (e: any){
            console.log(e.message)
        }

    }

    const addEvent = () =>{
        console.log(message)
        console.log(day)
        addEventf()
        dispatch(activitesReducer());

        setOpen(false)
        history('/')

    }


    return(
        <>

            <div className={classes.button}>
                <Button onClick={handleOpen}>Manage Activities </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Select the day and the Event you want to add to it
                        </Typography>

                        <div>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <InputLabel id="demo-simple-select-autowidth-label">Day</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={day}
                                    onChange={handleChangeDay}
                                    autoWidth
                                    label="day"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"dayOne"}>Day One</MenuItem>
                                    <MenuItem value={"dayTwo"}>Day Two</MenuItem>
                                    <MenuItem value={"dayThree"}>Day Three</MenuItem>
                                    <MenuItem value={"dayFour"}>Day Four</MenuItem>
                                    <MenuItem value={"dayFive"}>Day Five</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


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
                                    id="outlined-multiline-flexible"
                                    label="Multiline"
                                    multiline
                                    maxRows={4}
                                    value={value}
                                    onChange={handleChangeEvent}
                                />

                            </div>

                            <Button variant="contained" color="success" onClick={addEvent}>
                                Add Event
                            </Button>


                        </Box>


                    </Box>
                </Modal>
            </div>

            { errorMessage ? <ErrorMessageComponent message={errorMessage}/> : <></> }




        </>
    )


}


export default ActivitiesManagerComponent