import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardActions, CardContent, Paper, Theme, Typography} from "@mui/material";


const TemperatureComponent = () => {
    const [yvtemp,setYvTemp]=useState()
    const [tmtemp,setTmTemp]=useState()
    const [mgtemp,setMgTemp]=useState()


    useEffect(() => {
        mariposa_grove()
        yosemite_valley()
        tuolumne_meadows()
    }, [])


    async function yosemite_valley() {
        const response = await axios.get('https://yosemite-temps.herokuapp.com/weather/yosemite-valley',{headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },});
        console.log(response.data)
        setYvTemp(response.data)

    }
    async function tuolumne_meadows() {
        const response = await axios.get('https://yosemite-temps.herokuapp.com/weather/tuolumne-meadows',{headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },});
        console.log(response.data)
        setTmTemp(response.data)

    }
    async function mariposa_grove() {
        const response = await axios.get('https://yosemite-temps.herokuapp.com/weather/mariposa-grove',{headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },});
        console.log(response.data)
        setMgTemp(response.data)

    }

    const useStyles = makeStyles((theme:Theme) => ({
        Card:{
            textAlign: "center",
            marginTop: 25,
            marginBottom: 25,
            marginLeft: 25,
            marginRight: 25
        },

        div:{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            marginRight: 25
        }
    }));

    const classes = useStyles();
    return(
        <>

            <div className={classes.div}>
            <Card sx={{ maxWidth: 300 }} className={classes.Card}>

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">Yosemite Valley</Typography>
                    <Paper variant="outlined" elevation={24}>{yvtemp}°F</Paper>

                </CardContent>
                <CardActions>

                    <Button size="small">7 day average</Button>

                </CardActions>

            </Card>


            <Card sx={{ maxWidth: 300 }} className={classes.Card}>

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">Tuolumne Meadows</Typography>
                    <Paper variant="outlined" elevation={24}>{tmtemp}°F</Paper>

                </CardContent>
                <CardActions>

                    <Button size="small">7 day average</Button>

                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 300 }} className={classes.Card}>
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    height="140"*/}
                {/*    image={myimage}*/}
                {/*/>*/}
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">Porcupine Flat</Typography>
                    <Paper variant="outlined" elevation={24}>{yvtemp}°F</Paper>

                </CardContent>
                <CardActions>

                    <Button size="small">7 day average</Button>

                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 300 }} className={classes.Card}>

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">Yosemite Valley</Typography>
                    <Paper variant="outlined" elevation={24}>{mgtemp}°F</Paper>

                </CardContent>
                <CardActions>

                    <Button size="small">7 day average</Button>

                </CardActions>

            </Card>
            </div>

        </>
    )
}

export default TemperatureComponent