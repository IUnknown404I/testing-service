import {$host} from "./index";


export const getAnswers = async (questionId) => {
    const {data} = await $host.get(`api/question/answers?questionId=${questionId}`);
    return data;
}