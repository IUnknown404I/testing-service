import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);

    const fetching = async () => {
        try {
            setIsLoading(true);
            callback();
        }
        catch (e) {
            void(0)
        }
        finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading];
}