import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (login, password, email=null) => {
    const {data} = await $host.post('api/user/registration', {login, password, email});
    localStorage.setItem('token', data.jwtToken)
    return jwt_decode(data.jwtToken);
}

export const authorization = async (login, password) => {
    const {data} = await $host.post('api/user/authorization', {login, password});
    localStorage.setItem('token', data.jwtToken)
    return jwt_decode(data.jwtToken);
}

export const auth = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.jwtToken)

    return jwt_decode(data.jwtToken);
}