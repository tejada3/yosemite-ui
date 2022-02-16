import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Popover, Theme, Typography} from "@mui/material";

const StatusComponent = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;
    const useStyles = makeStyles((theme: Theme) => ({
        colwhen: {

            border: "black",
            marginLeft:200,
            marginRight:50,
            marginTop: 25,
            marginBottom: 25,
            display: "list-item"
        },

        topo:{
            textAlign: "left"
        }


    }));

    const classes = useStyles();
    return(
        <>
            <div className={classes.colwhen}>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    <h1>When are payments for the rental due</h1>
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <Typography sx={{ p: 2 }} className={classes.topo}>Car Rental( $150 each) : *Due when we get there*</Typography>
                    <Typography sx={{ p: 2 }} className={classes.topo}>Flights( $350-500 + bags fees) : Cop Asap</Typography>
                    <Typography sx={{ p: 2 }} className={classes.topo}>Airbnb( $220 each) : Due June 8TH</Typography>
                    <Typography sx={{ p: 2 }} className={classes.topo}>-Bring about ~$500</Typography>
                </Popover>

            </div>
        </>
    )
}

export default StatusComponent