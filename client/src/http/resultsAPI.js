import {$host} from "./index";
import jwtDecode from "jwt-decode";
import reduxStore from "../redux/store";

export const getResults = async () => {
    const id = jwtDecode(localStorage.getItem('token')).id;

    const {data} = await $host.get(`api/user/result?userId=${id}`);
    return data;
}

const send = async (userResults) => {
    const {data} = await $host.post('api/check-results', {userResults});
    return data;
}

export const checkResults = async (userResults) => {
    return await send(userResults);
}