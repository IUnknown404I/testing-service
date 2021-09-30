import React, {useEffect, useState} from 'react';
import {getAllTests} from "../http/testChooseAPI";
import Loader from "../components/UI/Loader/Loader";
import TestsList from "../components/TestsList";
import reduxStore from "../redux/store";
import ResultsModal from "../components/UI/resultsModal/ResultsModal";
import {useDispatch} from "react-redux";
import {Actions} from "../redux/actions";

const TestChoose = () => {
    const dispatch = useDispatch();
    const [tests, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modal, setModal] = useState(false);

    const fetchTests = async () => {
        const res = await getAllTests();
        setTests(res);
        setIsLoading(false);
    }

    useEffect(() => {
        if(reduxStore.getState().results && Object.keys(reduxStore.getState().results).length) {
            setModal(true);
        }
    }, [reduxStore.getState().results])

    useEffect(() => {
        fetchTests()

        return () => {
            dispatch(Actions.clearResults());
        }
    }, [])

    return (
        <div>
            {modal
                ? <ResultsModal setModal={setModal}/>
                : void(0)
            }

            <h2 style={{textAlign: 'center', marginTop: '110px'}}>Выберите тест для прохождения</h2>
            {isLoading
                ? <Loader/>
                : <TestsList tests={tests}/>
            }
        </div>
    );
};

export default TestChoose;