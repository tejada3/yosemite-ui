export class User{
    emall: string;
    isAuth: boolean;
    token: string;

    constructor(email: string, isAuth: boolean, token: string) {
        this.emall = email;
        this.isAuth=isAuth
        this.token = token
    }
}