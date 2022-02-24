import {Accordion, AccordionDetails, AccordionSummary, Theme, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import DayActivityDisplay from "./DayActivityDisplayComponent";
import {useEffect, useState} from "react";
import {Day} from "../../dtos/Day";
import axios from "axios";


const DayOneComponent = () => {

    const [d, setD] = useState([] as Event[])

    useEffect(() => {
        dayActivities()
    }, [])


    async function dayActivities() {
        const response = await axios.get('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/event');
        console.log(response.data.payload.dayOne)
        console.log(response.data.payload.dayTwo)
        console.log(response.data.payload.dayThree)
        console.log(response.data.payload.dayFour)
        console.log(response.data.payload.dayFive)
        console.log(response.data.payload)
        setD(response.data.payload.dayFive)

    }



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

    // @ts-ignore
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

                            {d.map((events, index, e)=>(
                                <Typography>items</Typography>
                                ))}

                            Ayooooo

                           {/*<DayActivityDisplay day={d} setDay={setD}/>*/}

                        </AccordionDetails>
                    </Accordion>

                </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 2</Typography>
                    </AccordionSummary>

                    <AccordionDetails className={classes.accBorder}>
                        <Typography>Get the Rental</Typography>

                        <Typography>Grab the permits from the Information station</Typography>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>

                        <Typography>Get the Rental</Typography>
                        <Typography>Do the deed</Typography>
                        <Typography>Grab the permits from the Information station</Typography>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>

                        <Typography>Get the Rental</Typography>
                        <Typography>Do the deed</Typography>
                        <Typography>Grab the permits from the Information station</Typography>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 5</Typography>
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