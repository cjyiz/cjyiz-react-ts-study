import React, { useContext } from "react";
import { ColorContext } from "./Color";

export const ShowArea = () => {
  // 从ColorContext中获取状态
  const { color } = useContext(ColorContext);
  console.log("这是显示状态", color);
  return <div style={{ color: color }}>字体颜色展示为{color}</div>;
};