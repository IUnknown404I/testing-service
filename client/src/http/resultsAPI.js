import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const getResults = async () => {
    const id = jwtDecode(localStorage.getItem('token')).id;

    const {data} = await $host.get(`api/user/result?userId=${id}`);
    return data;
}

export const checkResults = async (userResults, elapsed_time, test_name, login) => {
    const {data} = await $host.post('api/check_results', {userResults, elapsed_time, test_name, login});
    return data;
}