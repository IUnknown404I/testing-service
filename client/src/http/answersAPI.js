import {$host} from "./index";


export const getAnswers = (questionId) => {
    const {data} = $host.get(`api/question/answers?questionId=${questionId}`);
    return data;
}