import React, {useEffect, useState} from 'react';
import reduxStore from "../redux/store";
import {getResults} from "../http/resultsAPI";
import Loader from "../components/UI/Loader/Loader";
import UserResults from "../components/UserResults";
import UserCard from "../components/UI/userCard/UserCard";

const Profile = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTests = async () => {
        const res = await getResults(reduxStore.getState().login);
        setResults(res);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchTests()
    }, [])


    return (
        <div style={{textAlign: 'center'}}>
            <UserCard/>
            {isLoading
                ? <Loader/>
                : <UserResults results={results}/>
            }
        </div>
    );
};

export default Profile;