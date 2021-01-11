import React, { FC, useEffect, useState, useRef } from "react";
// 1.获取DOM节点
// 2.因为闭包导致的不能获取最新的值，使用useRef
// 3.使用一个持久化的值，改变不会导致数据重新渲染
export const UseRef1: FC = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const cjyiz = useRef(0);

  useEffect(() => {
    cjyiz.current = count;
    // console.log("最新的嘛？", cjyiz.current, color, count);
  });
  // const handleClick = () => {
  //   // 使用一个持久化的值，改变并不会导致数据重新渲染
  //   cjyiz.current = cjyiz.current + 1;
  //   console.log("真的", cjyiz.current, count);
  // };
  const handleClick = () => {
    setCount((count) => count + 1);
    // 这里的count是当前渲染的count,而cjyiz.current始终是最新的
    setTimeout(() => {
      console.log("测试", cjyiz.current, count);
    }, 1000);
    console.log("真的", cjyiz.current, count);
  };

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
