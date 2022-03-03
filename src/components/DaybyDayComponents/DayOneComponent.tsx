import {Accordion, AccordionDetails, AccordionSummary, Theme, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {activitiesState} from "../../state-slices/DaytoDay/Activites"


const DayOneComponent = () => {

    const [d1, setD1] = useState<any[]>([])
    const [d2, setD2] = useState<any[]>([])
    const [d3, setD3] = useState<any[]>([])
    const [d4, setD4] = useState<any[]>([])
    const [d5, setD5] = useState<any[]>([])

    const updateActivities: any = useSelector(activitiesState)

    useEffect(() => {
        dayActivities()
    }, [updateActivities])


    async function dayActivities() {
        const response = await axios.get('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/event');

        console.log(response.data.payload)
        setD1(response.data.payload.dayOne)
        setD2(response.data.payload.dayTwo)
        setD3(response.data.payload.dayThree)
        setD4(response.data.payload.dayFour)
        setD5(response.data.payload.dayFive)
    }



    const useStyles = makeStyles((theme:Theme) => ({

        dayOneDiv:{
            marginTop: 10,
            marginBottom: 10,
            marginRight:300,
            marginLeft:300
        },
        accBorder:{
            border: "solid",
            borderStyle: "outset"
        },
        infoDiv:{
          borderStyle:"outset"
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

                            <div className={classes.infoDiv}>
                            {d1.map(((e, index, ev)=>(
                                <>
                                    <hr/>
                                    <h6>{e.event}</h6>
                                </>
                            )))}
                            </div>

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

                        <div className={classes.infoDiv}>
                        {d2.map(((e, index, ev)=>(
                            <>
                                <hr/>
                                <h6>{e.event}</h6>
                            </>
                        )))}
                        </div>

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

                        <div className={classes.infoDiv}>
                        {d3.map(((e, index, ev)=>(
                            <>
                                <hr/>
                                <h6>{e.event}</h6>
                            </>
                        )))}
                        </div>

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

                        <div className={classes.infoDiv}>
                        {d4.map(((e, index, ev)=>(
                            <>
                                <hr/>
                                <h6>{e.event}</h6>
                            </>
                        )))}
                        </div>

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


                        <div className={classes.infoDiv}>
                            {d5.map(((e, index, ev)=>(
                                <>
                                    <hr/>
                                    <h6>{e.event}</h6>
                                </>
                            )))}
                        </div>
                    </AccordionDetails>
                </Accordion>

            </div>
        </>
    )
}

export default DayOneComponent