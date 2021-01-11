import React, { useRef } from "react";
import * as htmlToImage from 'html-to-image';
import './index.css'
export const HtmlToImg = () => {
//   const toImg:any = useRef(null);
const toImg:any=document.getElementById('canva')
  const tochange = () => {
      console.log('点击一下',toImg)
    htmlToImage
      .toPng(toImg)
      .then((dataUrl)=> {
        var img = new Image();
        img.src = dataUrl;
        console.log('地址',dataUrl)
        document.body.appendChild(img);
      })
      .catch((error) =>{
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div >
        <button onClick={tochange} className='btn'></button>
      <div id='canva' className='canva' >我们不一样
      </div>
    </div>
  );
};
