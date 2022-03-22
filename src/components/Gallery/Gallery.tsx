import { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Theme } from "@mui/material";
import axios from "axios";
import List from "./List";
import background from "../../static/RbackV2.jpg"


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

    const onFileInput = async (event: any) => {

        const presignedPostResponse = await axios.get(`https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/s3?method=post&image_name=${event.target.files[0].name}`);
        console.log("getting called")
       
        console.log(presignedPostResponse);
        if (event.target.files && event.target.files[0]) {
            let payload = presignedPostResponse.data.payload.url
            let fields = presignedPostResponse.data.payload.fields

            //formData.append('file', event.target.files[0]); // The file must be the last element
          
            // console.log(fields);

            // console.log(payload)
            
            // const response = await fetch(payload, {
            //     method: 'POST',
            //     headers: {
            //         "Access-Control-Allow-Headers" : "Content-Type",
            //         "Content-Type": "application/json",
            //         "Access-Control-Allow-Origin":  "*",
            //      },
            //     body: {
            //         fields,
            //         file: event.target.files[0]
            //     }
            //});

            // ,{
            //     headers: {}, 
            //     data: fields
            //   });
            
            let response = await axios.post(presignedPostResponse.data.payload.url,{
                data: fields,
                file: event.target.files[0]
            });

            console.log("POST RESPONSE: ",response);
        }
    }

    async function preSignedUrl() {
        const response = await axios.get('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/s3?method=get');
        console.log(response);
        setImageList(response.data.payload);
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
                    id="file-input"
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