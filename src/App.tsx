import React, { useEffect, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
// import {CuseCallBack} from './components/Study/CuseCallBack'
import {CuseRef1} from './components/Study/useRef/1'
// import DomToImg from './components/DomToImg/index'
import {HtmlToImg} from './components/htmlToImg.tsx'
// import domtoimage from 'dom-to-image';
function App() {
  console.log('改了控制大')
  return (
    <>
      <div>
        <title>react Study</title>
        <div className='cjyiz'></div>
        <HtmlToImg />
      </div>
    </>
  );
}

export default App;
