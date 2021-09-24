import React, {useEffect, useState} from 'react';
import {getAllTests} from "../http/testChooseAPI";
import Loader from "../components/UI/Loader/Loader";
import TestsList from "../components/TestsList";

const TestChoose = () => {
    const [tests, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTests = async () => {
        const res = await getAllTests();
        setTests(res);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchTests()
    }, [])

    return (
        <div>
            <h2 style={{textAlign: 'center', marginTop: '110px'}}>Выберите тест для прохождения</h2>
            {isLoading
                ? <Loader/>
                : <TestsList tests={tests}/>
            }
        </div>
    );
};

export default TestChoose;