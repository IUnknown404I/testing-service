import {$host} from "./index";

export const getQuestions = async (testId) => {
    if(!testId) {
        return
    }
    const {data} = await $host.get(`api/question?testId=${testId}`);
    return data;
}