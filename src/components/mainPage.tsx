import {Container, Theme} from "@mui/material";

import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TemperatureComponent from "./TemperatureComponent";
import SuppliesComponent from "./supplyComponents/SuppliesPage";

import InformationComponent from "./infomationComponents/InformationComponent";
import DayOneComponent from "./DaybyDayComponents/DayOneComponent";
import ActivitiesManagerComponent from "./DaybyDayComponents/ActivitiesManagerComponent";
import {authState} from "../state-slices/auth/auth"
import {User} from "../models/user"
import {useSelector} from "react-redux";


const DailtInfo = () => {

    const user: User = useSelector(authState)
    console.log(user);

    const useStyles = makeStyles((theme:Theme) => ({

        Container:{
            marginTop: 20,
        },

        ContainerDays:{
            marginTop: 20,
            textAlign: 'center',
            width: 600
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
        <div>

            <TemperatureComponent/>

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

            <Container className={classes.ContainerDays}>

                {user.isAuth
                    ?

                    <ActivitiesManagerComponent/>

                    :
                   ''
                }

                <DayOneComponent/>
            </Container>


        </div>



    )

}

export default DailtInfo