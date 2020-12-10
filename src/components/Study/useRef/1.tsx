import React, { FC, useEffect, useState, useRef } from "react";
export const CuseRef1: FC = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const cjyiz = useRef(0);
  useEffect(() => {
    cjyiz.current = count;
    console.log("最新的嘛？", cjyiz.current, color, count);
  }, [count]);
  const handleClick = () => {
    //   这里记录的就是当前的count
    cjyiz.current = count;
    setCount((count) => count + 1);
    setColor("blue");
    console.log("真的", cjyiz.current, count);
  };
  cjyiz.current = count;
  console.log("外面", cjyiz.current, count);

  return (
    <>
      <div>
        <title>react useRef </title>
        <button className="btn" onClick={handleClick}>
          点击几次{count}
        </button>
      </div>
    </>
  );
};
