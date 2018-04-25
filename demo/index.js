import React from 'react';
import ReactDOM from "react-dom";
import Application from './Application';

import './reset.css';
import './style.css';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
    <Application />, wrapper
  ) 
: false;

