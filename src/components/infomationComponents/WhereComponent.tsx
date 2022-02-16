import {Button, Popover, Theme, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const WhereComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const openw = Boolean(anchorEl);

    const idw = open ? 'simple-popoverw' : undefined;
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
                <Button aria-describedby={idw} variant="contained" onClick={handleClick}>
                    <h1>Where are we staying</h1>
                </Button>
                <Popover
                    id={idw}
                    open={openw}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                >
                    <Typography sx={{ p: 2 }}>Airbnb in Groveland California</Typography>
                </Popover>

            </div>
        </>
    )
}

export default WhereComponent