import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Theme } from "@mui/material";
import axios from "axios";
import ImageCard from "./ImageCard"
import List from "./List";
import background from "../../static/RbackV2.jpg"
import background2 from "../../static/a3aaa2bfbe3ddd78a284aa14f5b942ec.jpg"


const Gallery = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        preSignedUrl();
    }, []);

    const useStyles = makeStyles((theme:Theme) => ({
        btnContainer:{
            position:'fixed',
            right:20,
            bottom:20
        },
        cards:{
            display: "flex",
            justifyContent:'center',
            alignItems:'center'
        },
        mainContainer:{
            backgroundImage: `url(${background})`,
            backgroundSize: 'strech'
        }
    }));
    
    const classes = useStyles();

    const onFileInput = (event: any) => {
        if (event.target.files && event.target.files[0]) {

            console.log(event.target.files[0]);
            //Upload here
        }
    }

    async function preSignedUrl() {
        const response = await axios.get('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/s3');
        setImageList(response.data.payload);
        console.log(response.data.payload);
        return response.data.payload;
    }

    return <>
        <div className={classes.mainContainer}>
            <div className={classes.btnContainer}>
                <Button style={{
                    backgroundColor: "rgba(220, 255, 220, 0.85)",
                    color: "black",
                    fontSize: 20
                }}
                variant="contained"
                component="label"
                >
                Upload Image
                <input
                    type="file"
                    hidden
                    onChange={onFileInput}

                />
                </Button>
            </div>

            <div className={classes.cards}>
                <List imgArr={imageList}/>
            </div>
        </div>
        </>
}

export default Gallery