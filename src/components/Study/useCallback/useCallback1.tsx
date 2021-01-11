import React, { FC, useCallback, useState } from "react";

export const UseCallback1: FC = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const testCallback1 = () => {
    console.log("没有callback", count, color);
  };
  const testCallback2 = useCallback(
    (color: string) => {
      console.log("使用callback包裹", color, count);
    },
    [count]
  );

  const clik1 = () => [setCount((count) => count + 1)];
  const changeColor = () => {
    setColor("blue");
  };
  console.log("真实的count", count);
  testCallback1();
  testCallback2("yellow");
  return (
    <div>
      <button onClick={clik1}>点击变化</button>
      <button onClick={changeColor}>点击变化</button>
    </div>
  );
};
