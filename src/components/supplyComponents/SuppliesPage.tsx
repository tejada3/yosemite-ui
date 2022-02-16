import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material";


const SuppliesComponent = () => {
    const useStyles = makeStyles((theme:Theme) => ({

        colSupplies:{
            textAlign: "left",
            width: "max-content",
            fontSize:22
        }


    }));

    const classes = useStyles();
    return(
        <>
            <h1>Supplies needed: </h1>
            <div className={classes.colSupplies}>

            <h6>Backpacking Gear</h6>
            <h6>Sleeping bags</h6>
            <h6>Hiking Boot</h6>
            <h6>Light weight hammock or tent </h6>
            <h6>Dried up meals </h6>
            <h6>Something to carry water In</h6>
            <h6>Light weight filtration system for water</h6>
            <h6>Head Lamps</h6>
            <h6>Sleeping bags</h6>
            <h6>Batteries packs</h6>
            <h6>Gas cooker</h6>

            </div>
        </>

    )

}

export default SuppliesComponent