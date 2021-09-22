import React from 'react';
import './styles/App.css';
import './styles/Reg.css';
import './styles/Log.css';
import {useDispatch, useSelector} from "react-redux";

import Registration from "./pages/Registration";
import Login from "./pages/Login";


function App() {
    //dispatch(ACTION)
    //action: ({type: '', payload: ...})
    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers)

  return (
      <div className="App">
          {/*<Login/>*/}
          <Registration/>
      </div>
  );
}

export default App;
