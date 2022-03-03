import {Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Theme, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import axios from "axios";
import DayActivityDisplay from "./DayActivityDisplayComponent";
import {authState} from "../../state-slices/auth/auth";
import {User} from "../../models/user";
import {useSelector} from "react-redux";
import {activitiesState} from "../../state-slices/DaytoDay/Activites"


const DayOneComponent = () => {
    const user: User = useSelector(authState);
    const updateActivities: any = useSelector(activitiesState);

    const [d1, setD1] = useState<any[]>([])
    const [d2, setD2] = useState<any[]>([])
    const [d3, setD3] = useState<any[]>([])
    const [d4, setD4] = useState<any[]>([])
    const [d5, setD5] = useState<any[]>([])

    useEffect(() => {
        dayActivities();
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
        },
        row: {
            display: 'inline-flex',
            alignItems: 'space-between',
        },
        col2: {
            textAlign: 'left',
            width: 'max-content'
        },
        col1: {
            marginTop: 5,
            marginLeft: 50,
            width: 900
        }

    }));

    const classes = useStyles();

    const deleteEvent = (day: string, order: string) => (
        '<DayActivityDisplay day={day} order={order} />'

    )

    return(
        <>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>

                        <div className={classes.infoDiv}>
                            {d1.map(((e, index, ev) => (
                                <>
                                    <hr/>
                                    <div>
                                        <div className={classes.row}>

                                            <div className={classes.col1}>
                                                {e.event}
                                            </div>

                                            <div className={classes.col2}>

                                                {user.isAuth ?

                                                    ''
                                                    :
                                                    <IconButton aria-label="delete" size="large">
                                                        <DayActivityDisplay day={"dayOne"}
                                                                            order={String(index + 1)}/>
                                                    </IconButton>

                                                }

                                            </div>

                                        </div>
                                    </div>
                                </>
                            )))}
                        </div>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>

                        <div className={classes.infoDiv}>
                            {d2.map(((e, index, ev) => (
                                <>
                                    <hr/>
                                    <div>
                                        <div className={classes.row}>

                                            <div className={classes.col1}>
                                                {e.event}
                                            </div>

                                            <div className={classes.col2}>
                                                <IconButton aria-label="delete" size="large">
                                                    <DeleteIcon fontSize="inherit" color={'error'}/>
                                                </IconButton>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )))}
                        </div>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>

                        <div className={classes.infoDiv}>
                            {d3.map(((e, index, ev) => (
                                <>
                                    <hr/>
                                    <div>
                                        <div className={classes.row}>

                                            <div className={classes.col1}>
                                                {e.event}
                                            </div>

                                            <div className={classes.col2}>
                                                <IconButton aria-label="delete" size="large">
                                                    <DeleteIcon fontSize="inherit" color={'error'}/>
                                                </IconButton>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )))}
                        </div>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>

                        <div className={classes.infoDiv}>
                            {d4.map(((e, index, ev) => (
                                <>
                                    <hr/>
                                    <div>
                                        <div className={classes.row}>

                                            <div className={classes.col1}>
                                                {e.event}
                                            </div>

                                            <div className={classes.col2}>
                                                <IconButton aria-label="delete" size="large">
                                                    <DeleteIcon fontSize="inherit" color={'error'}/>
                                                </IconButton>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )))}
                        </div>

                    </AccordionDetails>
                </Accordion>

            </div>
            <div className={classes.dayOneDiv}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Day 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accBorder}>


                        <div className={classes.infoDiv}>
                            {d5.map(((e, index, ev) => (
                                <>
                                    <hr/>
                                    <div>
                                        <div className={classes.row}>

                                            <div className={classes.col1}>
                                                {e.event}
                                            </div>

                                            <div className={classes.col2}>
                                                <IconButton aria-label="delete" size="large">
                                                    <DeleteIcon fontSize="inherit" color={'error'}/>
                                                </IconButton>
                                            </div>

                                        </div>
                                    </div>
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