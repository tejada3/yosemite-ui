import { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Theme } from "@mui/material";
import axios from "axios";
import List from "./List";
import background from "../../static/RbackV2.jpg"
import { User } from '../../models/user';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '../../state-slices/auth/auth';
import { setFailureMessage, setSuccessMessage, showSnackbar } from '../../state-slices/error/error-slice';


const Gallery = () => {
    const [uploadImage, setUploadImage] = useState(0);
    const [imageList, setImageList] = useState([]);
    const [email, setEmail] = useState<string | undefined>(undefined);

    const user: User = useSelector(authState)

    useEffect(() => {
        preSignedUrl();
    }, [uploadImage]);

    useEffect(() => {
        const user = localStorage.getItem('email');
        if(user && email!=user)
          setEmail(user);
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
    const dispatch = useDispatch();

    const onFileInput = async (event: any) => {

        const presignedPostResponse = await axios.get(`https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/s3?method=post&image_name=${event.target.files[0].name}`);
    
        console.log(presignedPostResponse);
        if(presignedPostResponse.data.payload.length == 0){
            dispatch(setFailureMessage())
            dispatch(showSnackbar("Image with same name has already been uploaded"))
            return;
        }

        if (event.target.files && event.target.files[0]) {
            let payload = presignedPostResponse.data.payload.url
            const formData = new FormData();

            Object.keys(presignedPostResponse.data.payload.fields).forEach(key => {
                formData.append(key, presignedPostResponse.data.payload.fields[key]);
            });

            console.log(event.target.files[0]);

            formData.append("file", event.target.files[0]);

            fetch(
                payload,
                {
                    method: "POST",
                    body: formData,
                }
            ).then(
                res =>{
                    console.log(res);
                    dispatch(setSuccessMessage())
                    dispatch(showSnackbar("Image successfully uploaded!"))
                    setUploadImage(uploadImage+1);
            }).catch((error) => {
                console.log(error);
                dispatch(setFailureMessage())
                dispatch(showSnackbar(error))
                throw error;
            });

        }
    }

    async function preSignedUrl() {
        const response = await axios.get('https://l3yu0l18ib.execute-api.us-east-1.amazonaws.com/Yosemite/s3?method=get');
        console.log(response);
        setImageList(response.data.payload);
    }

    return <>
        <div className={classes.mainContainer}>
            {email ? 
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
            :
            ''
            }

            <div className={classes.cards}>
                <List imgArr={imageList}/>
            </div>
        </div>
        </>
}

export default Gallery