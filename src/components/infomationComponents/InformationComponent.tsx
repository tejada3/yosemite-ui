
import WhenComponent from "./WhenComponent";
import WhereComponent from "./WhereComponent";
import CarRentalComponent from "./CarRentalComponent";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material";
import StatusComponent from "./StatusComponent";



const InformationComponent = () => {


    const useStyles = makeStyles((theme: Theme) => ({
        colwhen: {

            border: "black",
            marginLeft:150,
            marginRight:50,
            marginTop: 25,
            marginBottom: 25,
        }


    }));

    const classes = useStyles();


    return (
        <>
            <h1 className={classes.colwhen}> IMPORTANT INFORMATION </h1>
            <WhenComponent/>
            <WhereComponent/>
            <CarRentalComponent/>
             <StatusComponent/>

        </>
    )
}
 export default InformationComponent