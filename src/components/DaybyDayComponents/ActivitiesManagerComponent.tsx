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

const ActivitiesManagerComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [day, setday] = React.useState('');
    const [value, setValue] = React.useState('Controlled');

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
        console.log(event.target.value)
    };

    const addEvent = () =>{
        ///logic to call api to add the event
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
                                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
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

        </>
    )


}


export default ActivitiesManagerComponent