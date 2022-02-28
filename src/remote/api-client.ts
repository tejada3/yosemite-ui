import axios from 'axios';
import apiUrl from './api-url';

export const quizzardApiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        //@ts-ignore
        'Authorization': localStorage.getItem("api-token")
        }
})
