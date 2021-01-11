import React, { FC } from "react";
import { produce, original, current } from "immer";
// immer本质就是一个数据管道，保持元数据不变，创建一个副本数据，进行操作修改，返回一个新数据。

export const Immer1: FC = () => {
  const baseState = [
    {
      todo: "learn typescript",
      done: true,
    },
    {
      todo: "try immer",
      done: false,
    },
  ];

  const nextState = produce(baseState, (draftState) => {
    draftState.push({ todo: "tweet", done: false });
    //  这个current永远代表着当前的draftState的值
    const currentState = current(draftState);
    draftState[1].done = true;
    setTimeout(() => {
      console.log("定时器内当前的测试", currentState);
    });
    // 用上original其实就是替代了
    const initState = original(draftState);
    console.log("original测试", initState);

    // 这个打出来是个proxy
    console.log("current测试", currentState);
  });
  console.log("下一个参数", nextState, baseState);
  return <div>immer测试</div>;
};
