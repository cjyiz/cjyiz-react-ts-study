import React, { useRef, useState, useEffect } from "react";

const DomToImg = () => {
  const canva = useRef(null);
  const cjyiz=useRef(null)
  const [url, setUrl] = useState("");
  const [background,setBackground]=useState('blue')
//   let canvas: any;
//   let ctx: any;
//   useEffect(() => {
//     const canvasObj = document.getElementById("canvas");
//     console.log(canvasObj);
//   });
  const draw = () => {
    const canvas:any= canva.current;
    const ctx:any = (canvas as HTMLCanvasElement).getContext("2d");
    const cjyiz1:any=cjyiz.current
    const ctx1:any=(cjyiz1 as HTMLCanvasElement).getContext("2d");
    var lingrad = ctx1.createLinearGradient(0, 0, 0, 150);
    lingrad.addColorStop(0, "#00ABEB");
    lingrad.addColorStop(0.5, "#fff");
    lingrad.addColorStop(0.5, "#26C000");
    lingrad.addColorStop(1, "#fff");
    ctx1.fillStyle = lingrad;
    ctx1.fillRect(0, 0, 50, 50);
    ctx.drawImage(cjyiz1,0,0)
    const url = canvas.toDataURL()
    setUrl(url);
  };
  return (
    <div>
      <button
        onClick={draw}
        style={{ height: "100px", width: "100px" }}
      ></button>
      <canvas id='cjyiz' ref={cjyiz} style={{ height: "100px", width: "100px",border:'1px solid red',background:background }}></canvas>
      <canvas
        id="canvas"
        ref={canva}
        width={150}
        height={150}
        style={{
          display: 'none',
        }}
      ></canvas>
      <img src={url}  style={{height:"100px",width:'100px'}} alt="" />
    </div>
  );
};

export default DomToImg;
