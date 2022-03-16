import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@mui/material";
import axios from "axios";
import ImageCard from "./ImageCard"
import List from "./List";


const Gallery = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [imageList, setImageList] = useState([]);

    //@ts-ignore
    useEffect(async() => {

        return setImageList(await preSignedUrl());
    }, []);

    const useStyles = makeStyles((theme:Theme) => ({
        dragAndDrop:{
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop: 20,
            width: 200,
        },
        cards:{
            display: "flex",
            justifyContent:'center',
            alignItems:'center'
        }
    }));
    const classes = useStyles();

    const onFileInput = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            console.log(event.target.files[0]);
            //Upload here
        }
    }

    async function preSignedUrl() {
        const response = await axios.get('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/s3');
        console.log(response.data.payload);
        return response.data.payload;
    }

    return <>
            <div className={classes.dragAndDrop}>
                <section>

                    <input type="file" className="filetype" id="group_image" onChange={onFileInput}/>

                </section>

            </div>
            <div className={classes.cards}>
                <List imgArr={imageList}/>
            </div>

        </>
}

export default Gallery