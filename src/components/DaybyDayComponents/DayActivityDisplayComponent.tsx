import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import {Day} from "../../dtos/Day";





interface Activities{

    day: Day,
    setDay:(arg0: Day) => void


}

const DayActivityDisplay = ( props: Activities) => {
    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2),

        },
        textAlign: 'center'
    }));

    return(
        <>

            <Root >
                <Divider textAlign="left">RIGHT</Divider>
                {props.day.dayActivities}
                <Divider  textAlign="left">CENTER</Divider>
                idhfbauiowedbfilabnwercilabnrvbervbqerbvhiqbrvgqoeir
                <Divider textAlign="left">LEFT</Divider>
                idhfbauiowedbfilabnwercilabnrvbervbqerbvhiqbrvgqoeir
                <Divider textAlign="left">RIGHT</Divider>
                idhfbauiowedbfilabnwercilabnrvbervbqerbvhiqbrvgqoeir
                <Divider textAlign="left">RIGHT</Divider>
                idhfbauiowedbfilabnwercilabnrvbervbqerbvhiqbrvgqoeir

            </Root >

        </>
    )
}

export default DayActivityDisplay