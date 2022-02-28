import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_wE7zXbQV2",
    ClientId: "7cqpjqql4js2gpqe3sv7qoc28r"
}

export default new CognitoUserPool(poolData);