import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



const app = (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
)

ReactDOM.render(
       app ,
  document.getElementById('root')
);