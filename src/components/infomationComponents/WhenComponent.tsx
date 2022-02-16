import {makeStyles} from "@material-ui/core/styles";
import {Button, Popover, Theme, Typography} from "@mui/material";
import React from "react";
import WhereComponent from "./WhereComponent";


const WhenComponent = () => {
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
        }


    }));

    const classes = useStyles();

    return(
        <>
            <div className={classes.colwhen}>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    <h1>When</h1>
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                >
                    <Typography sx={{ p: 2 }}>June 21st - June 26th</Typography>
                </Popover>
            </div>




        </>
    )
}

export default WhenComponent