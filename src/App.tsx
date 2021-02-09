import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { UseRef1 } from "@/components/Study/useRef/UseRef1";
import {Observable2} from '@/components/Study/observable/Observable2'
function App() {
  const cc=()=>{
    const a=1
    const b=2
    const c=3
    if(a===1){
      console.log('执行1')
    }
    if(b===2){
      console.log('执行2')
      return 
    }
    if(c===3){
      console.log('执行3')
    }
  }
cc()
console.log('最后执行')
  return (
    <>
    <div className='cjyiz'>
      <div className='cjyiz2'>

      <div className='box'>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <div className='cc'>1</div>
        <title>react Study</title>
      </div>
      </div>
      </div>

    </>
  );
}

export default App;
