import { useEffect, useCallback } from "react";

export default isPrevent => {
    const preventReload = useCallback(event => {
        event.preventDefault();
        event.returnValue = "";
    }, []);

    useEffect(() => {
        if (isPrevent) {
            window.addEventListener("beforeunload", preventReload);
        }
        return () => {
            if (isPrevent) {
                window.removeEventListener("beforeunload", preventReload);
            }
        };
    }, [isPrevent, preventReload]);
};