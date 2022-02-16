import {Button, Card, CardActions, CardContent, CardMedia, Container, Paper, Theme, Typography} from "@mui/material";
import axios, {Axios} from "axios";
import {useEffect} from "react";
import React,{useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";



const DailtInfo = () => {

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


        Container:{
            marginTop: 20,
            borderStyle: "ridge",
            borderColor:"#4e3e61",
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-evenly",
            textAlign: "center"
        },

        Card:{
            textAlign: "center",
            marginTop: 25,
            marginBottom: 25,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9,
            marginTop:'30'
        }

    }));

    const classes = useStyles();
    return(
        <>
            <Container maxWidth="md" className={classes.Container}>


                <Card sx={{ maxWidth: 300 }} className={classes.Card}>

                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">Yosemite Valley</Typography>
                        <Paper variant="outlined" elevation={24}>{mgtemp}°F</Paper>

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
                    {/*    image="/static/images/cards/contemplative-reptile.jpg"*/}
                    {/*/>*/}
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">Mariposa Grove</Typography>
                        <Paper variant="outlined" elevation={24}>{yvtemp}°F</Paper>

                    </CardContent>
                    <CardActions>

                        <Button size="small">7 day average</Button>

                    </CardActions>
                </Card>


            </Container>
        </>



    )

}

export default DailtInfo