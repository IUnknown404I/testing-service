import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const getResults = async (login) => {
    const id = jwtDecode(localStorage.getItem('token')).id;

    const {data} = await $host.get(`api/user/result?userId=${id}`);
    return data;
}