import React, {useEffect, useState} from 'react';
import './styles/App.css';
import './styles/Reg.css';
import './styles/Log.css';
import './styles/ResultTable.css';
import './styles/Test.css';
import './styles/Testing.css';
import './styles/DnD.css';
import './styles/Courses.css';
import './styles/Eco.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import {AuthContext} from "./context";
import AppRouter from "./components/AppRouter";
import {auth} from "./http/userAPI";
import Loader from "./components/UI/Loader/Loader";
import {useDispatch} from "react-redux";
import {Actions} from "./redux/actions";


const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [testName, setTestName] = useState('');
    const [testId, setTestId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [timeLimit, setTimeLimit] = useState(0);
    const dispatch = useDispatch();

    const inputUserInfo = (decodedJWT) => {
        dispatch(Actions.insertLogin(decodedJWT.login));
        if(decodedJWT.email)
            dispatch(Actions.insertEmail(decodedJWT.email));
    }

    useEffect(() => {
        auth()
            .then(data => {
                inputUserInfo(data);
                setIsAuth(true);
            })
            .finally(() => { setIsLoading(false) })
    }, []);


  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          testName,
          setTestName,
          testId,
          setTestId,
          timeLimit,
          setTimeLimit,
      }}>
          <BrowserRouter>
              <div className="App">

                  <NavBar/>
                  {isLoading
                      ? <Loader/>
                      : <AppRouter/>
                  }


              </div>
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
