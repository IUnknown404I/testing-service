import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (login, password, email=null) => {
    const {data} = await $host.post('api/user/registration', {login, password, email});
    return jwt_decode(data.jwtToken);
}

export const authorization = async (login, password) => {
    const {data} = await $host.post('api/user/authorization', {login, password});
    return jwt_decode(data.jwtToken);
}

export const auth = async () => {
    const {data} = await $host.get('api/user/auth');
    return jwt_decode(data.jwtToken);
}