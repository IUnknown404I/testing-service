import React, {useState} from 'react';
import './styles/App.css';
import './styles/Reg.css';
import './styles/Log.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import {AuthContext} from "./context";
import AppRouter from "./components/AppRouter";


function App() {
    const [isAuth, setIsAuth] = useState(false);

  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
      }}>
          <BrowserRouter>
              <div className="App">

                  <NavBar/>
                  <AppRouter/>

              </div>
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
