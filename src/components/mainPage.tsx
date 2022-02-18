import {Container, Theme} from "@mui/material";

import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TemperatureComponent from "./TemperatureComponent";
import SuppliesComponent from "./supplyComponents/SuppliesPage";

import InformationComponent from "./infomationComponents/InformationComponent";
import DayOneComponent from "./DaybyDayComponents/DayOneComponent";




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
            borderColor:'black',


        },

        row:{
            display: "flex",
            borderColor: "black",
            width:"fit-content"
        },
        colSupples:{
            borderColor: "black",
            marginRight: 25
        },
        colwhen:{

            textAlign: "left",
            borderLeft: "outset",

        },
        bo:{
          width:"fit-content"
        }


    }));

    const classes = useStyles();
    return(
        <>

            <div className={classes.Container}>
                <TemperatureComponent/>
            </div>


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


            <div className={classes.Container}>
                <DayOneComponent/>
            </div>


        </>



    )

}

export default DailtInfo