export class User{
    email: string;
    isAuth: boolean;
    token: string;

    constructor(email: string, isAuth: boolean, token: string) {
        this.email = email;
        this.isAuth = isAuth;
        this.token = token;
    }
}