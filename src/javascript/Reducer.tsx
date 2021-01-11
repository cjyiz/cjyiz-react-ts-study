import React, { FC } from "react";

export const CReducer: FC = () => {
  // 3.对象数组求和
  const arr3 = [
    { subject: "math", score: 88 },
    { subject: "chinese", score: 95 },
    { subject: "english", score: 80 },
  ];
  const sum3 = arr3.reduce((accumulator, cur) => accumulator + cur.score, 0); 
  //  2.数组求和
  const arr2 = [12, 34, 23];
  const sum2= arr2.reduce((total, num) => total + num);
  // 1.扁平数组
  const arr1 = [
    [1, 2, 8],
    [3, 4, 9],
    [5, 6, 10],
  ];
  const res = arr1.reduce((x, y) => x.concat(y), []);
  console.log("扁平数组", res);

  return <div>{res}</div>;
};
