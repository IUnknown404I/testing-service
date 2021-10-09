import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import reduxStore from "./redux/store";
import Favicon from "react-favicon";


ReactDOM.render(

    <Provider store={reduxStore}>
        <Favicon url='../favicon.ico'/>
        <App />
    </Provider>,

  document.getElementById('root')
);
