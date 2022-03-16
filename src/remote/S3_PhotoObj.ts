import AWS from "aws-sdk";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, ListObjectsCommand, UploadPartCommand } from "@aws-sdk/client-s3";
import { useSelector } from "react-redux";
import { authState } from "../state-slices/auth/auth";
import { User } from "../models/user";
import testPhoto from "../static/3116300.jpg";

export default class S3Obj{

    user: User = useSelector(authState);

    BUCKET_NAME = "yosemite2022"
    KEY_ID = "AKIASX4G766C3OC5AHUT";
    SECRET_KEY = "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";

    s3 = new AWS.S3({
        accessKeyId: this.KEY_ID,
        secretAccessKey: this.SECRET_KEY
    });


    uploadImage = (image: any) =>{
        console.log(image);
        try{
        var result = this.s3.upload({
            Bucket: this.BUCKET_NAME,
            Key: this.user.email + Math.floor(Math.random()*10000)+".jpg",
            Body: image
        }, (putErr: any, putData: any) => {
            if (putErr) {
                console.error(putErr);
            } else {
                console.log(putData);
            }
        });
        console.log(result);
        }
        catch(error){
            console.log(error);
        }
    }


        // // Initialize the Amazon Cognito credentials provider
    // const REGION = "us-east-2";
    // const s3 = new S3Client({
    // region: REGION,
    // credentials: fromCognitoIdentityPool({
    //     client: new CognitoIdentityClient({ region: REGION }),
    //     identityPoolId: "IDENTITY_POOL_ID", // IDENTITY_POOL_ID e.g., eu-west-1:xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx
    // }),
    // });
    // s3.putObject

    // const params = {
    //     /** input parameters */
    // };
    
    // const command = new UploadPartCommand(params);

    // try{
    //     const data = await s3.send(command);
    //     console.log("SUCCESS",data);
    // } catch(error){
    //     console.log("ERROR occurred:",error);
    // }
}