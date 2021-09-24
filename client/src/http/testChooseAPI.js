import {$host} from "./index";

export const getAllTests = async () => {
    const {data} = await $host.get('api/test');
    return data;
}

export const getTest = async (name) => {
    const {data} = await $host.get(`api/test/?name=${name}`);
    return data;
}