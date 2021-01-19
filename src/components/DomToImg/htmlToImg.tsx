import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import "./index.css";
export const HtmlToImg = () => {
  //   const toImg:any = useRef(null);
  const toImg: any = document.getElementById("canva");
  const tochange = () => {
    console.log("点击一下", toImg);
    htmlToImage
      .toPng(toImg)
      .then((dataUrl) => {
        var img = new Image();
        img.src = dataUrl;
        console.log("地址", dataUrl);
        document.body.appendChild(img);
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div>
      <button onClick={tochange} className="btn"></button>
      <div id="canva" className="canva">
        我们不一样
      </div>
    </div>
  );
};
// if (fillType === "gradient" && gradient) {
//     const { angle: gradientAngle, color_pos_list: gradientColors, type: gradientType } = gradient;
//     if (gradientType === "linear") {
//       const xcenter = xmin + width / 2;
//       const ycenter = ymin + height / 2;
//       const temp90 = Math.floor(gradientAngle / 90) % 2;
//       const temp180 = Math.floor(gradientAngle / 180) % 2;
//       const radian = Math.PI / 180 * (temp90 * 90 + Math.pow(-1, temp90) * gradientAngle % 90);
//       const alpha = Math.atan(height / width);
//       const range = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) * Math.cos(radian - alpha);
//       const x1 = xcenter - Math.pow(-1, temp90) * Math.pow(-1, temp180) * Math.cos(radian) * range;
//       const y1 = ycenter - Math.sin(radian) * Math.pow(-1, temp180) * range;
//       const x2 = 2 * xcenter - x1
//       const y2 = 2 * ycenter - y1;
//       const linearGradiend = ctx.createLinearGradient(x1, y1, x2, y2);
//       gradientColors.forEach(([color, offset]) => linearGradiend.addColorStop(offset, color));
//       fillStyle = linearGradiend;
//     } else if (gradientType === "radial") {
//       const r = Math.sqrt(width * width + height * height) / 2;
//       const xmax = xmin + width / 2;
//       const ymax = ymin + height / 2;
//       const radialGradient = ctx.createRadialGradient(xmax, ymax, 0, xmax, ymax, r);
//       gradientColors.forEach(([color, offset]) => radialGradient.addColorStop(offset, color));
//       fillStyle = radialGradient;
//     }
//   } else {
//     const [a, r, g, b] = color;
//     fillStyle = `rgba( ${r}, ${g}, ${b},${+a / 255})`;
//   }
