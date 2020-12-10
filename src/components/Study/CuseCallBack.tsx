import React, { FC, useCallback, useState } from "react";

export const CuseCallBack: FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    cjyiz()
    setCount((count) => count + 1);
  };
  const cjyiz = useCallback(() => {
    console.log("计算一个高度",count);
  }, [count]);
  return (
    <>
      <div>
        <h1>react useCallback{count}</h1>
        <button onClick={handleClick}></button>
      </div>
    </>
  );
};
