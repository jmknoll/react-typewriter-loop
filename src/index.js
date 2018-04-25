import React from 'react';
import ReactDOM from "react-dom";
import TypewriterLoop from './ReactTypewriterLoop';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
  <TypewriterLoop />, wrapper
  ) 
: false;

