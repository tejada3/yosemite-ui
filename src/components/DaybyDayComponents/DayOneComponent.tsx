import {Accordion, AccordionDetails, AccordionSummary, Theme, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";


const DayOneComponent = () => {

    const useStyles = makeStyles((theme:Theme) => ({

        dayOneDiv:{
            marginTop: 20,
            marginBottom: 20
        },
        accBorder:{
            border: "solid",
            borderStyle: "outset"
        }

    }));

    const classes = useStyles();
    return(
        <>

                <div className={classes.dayOneDiv}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Day 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accBorder}>
                            <Typography>Get the Rental</Typography>
                            <Typography>Do the deed</Typography>
                            <Typography>Grab the permits from the Information station</Typography>

                        </AccordionDetails>
                    </Accordion>

                </div>
        </>
    )
}

export default DayOneComponent