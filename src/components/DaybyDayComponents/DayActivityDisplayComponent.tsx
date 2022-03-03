import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import {Day} from "../../dtos/Day";
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';



interface Activities{

    day: string
    order: string
}

const DayActivityDisplay = ( props: Activities) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const StyledModal = styled(ModalUnstyled)`
      position: fixed;
      z-index: 1300;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Backdrop = styled('div')`
      z-index: -1;
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-tap-highlight-color: transparent;
    `;

    const style = {
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        p: 2,
        px: 4,
        pb: 3,
    };

    const style1 = {
        display: 'inline-flex'
    };

    const checkmark = {
        "width":250,
        "color": "green",
        fontSize:60
    };

    const Xmark = {

        "color": "red",
        fontSize:60
    };

    const deleteEvent = (day: string, order: string) =>(
        async function dayActivities() {
            const response = await axios.delete('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/event', {
                data: {
                    "day": day,
                    "order": order
                }});
            handleClose()
        }
    )


    return(
        <div>
            <DeleteIcon fontSize="inherit" color={'error'} onClick={handleOpen} />
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <h2 id="unstyled-modal-title" style={{marginLeft:20}}>Are you sure you wanna delete?</h2>
                    <div style={style1}>
                        <CheckIcon style={checkmark} onClick={deleteEvent(props.day, props.order)}/><CloseIcon style={Xmark} onClick={handleClose}/>
                    </div>

                </Box>
            </StyledModal>
        </div>
    )
}

export default DayActivityDisplay