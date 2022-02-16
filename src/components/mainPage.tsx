import {Container, Theme} from "@mui/material";

import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TemperatureComponent from "./TemperatureComponent";
import SuppliesComponent from "./supplyComponents/SuppliesPage";

import InformationComponent from "./infomationComponents/InformationComponent";



const DailtInfo = () => {

    const useStyles = makeStyles((theme:Theme) => ({


        Container:{
            marginTop: 20,
            borderStyle: "ridge",
            borderColor:"#4e3e61",
            backgroundColor: '#1976d2'
        },

        SuppliesContainer: {
            border: "outset",
            marginTop:25,
            display: "flex",
            backgroundColor: 'grey',
            borderColor:'black'

        },

        row:{
            display: "flex",
            borderColor: "black"
        },
        colSupples:{
            borderColor: "black",
            marginRight: 25
        },
        colwhen:{

            textAlign: "left",
            borderLeft: "outset",

        }


    }));

    const classes = useStyles();
    return(
        <>
            <Container className={classes.Container}>


                <TemperatureComponent/>


            </Container>


            <Container  className={classes.SuppliesContainer}>

                <div className={classes.row}>

                    <div className={classes.colSupples}>
                        <SuppliesComponent/>
                    </div>

                    <div className={classes.colwhen}>
                       <InformationComponent/>
                    </div>

                </div>

            </Container>

            <Container className={classes.Container}>



            </Container>
        </>



    )

}

export default DailtInfo