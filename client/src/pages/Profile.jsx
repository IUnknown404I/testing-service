import React, {useContext, useEffect, useState} from 'react';
import {getResults} from "../http/resultsAPI";
import Loader from "../components/UI/Loader/Loader";
import UserResults from "../components/UserResults";
import UserCard from "../components/UI/userCard/UserCard";
import NavBar from "../components/UI/navbar/NavBar";

const Profile = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTests = async () => {
        const res = await getResults();
        setResults(res);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchTests()
    }, [])


    return (
        <>
            <NavBar/>

            <div style={{textAlign: 'center'}}>
                <UserCard/>
                {isLoading
                    ? <Loader/>
                    : <UserResults results={results}/>
                }
            </div>
        </>
    );
};

export default Profile;