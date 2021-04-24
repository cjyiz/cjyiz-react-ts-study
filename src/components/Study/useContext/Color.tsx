import React, { createContext, useReducer } from "react";

// 这是createContext的ts写法
interface IContextProps {
  color: string;
  dispatch: ({ type, color }: { type: string; color: string }) => void;
}
// 创建一个context,就是一个仓库？？参数即为默认值
export const ColorContext = createContext({} as IContextProps);

// 创建reducer,处理颜色更新逻辑
const reducer = (state: any, action: { type: any; color: any }) => {
  switch (action.type) {
    case "UPDATE_COLOR":
      return action.color;
    case "UPUPUP":
      return console.log("我要天天向上", action.color);
    default:
      return state;
  }
};

const defaultColor = { color: "pink" };
/** 创建一个Color组件
 * 该组件包裹的所有子组件都可以通过调用ColorContext访问到value
 */
export const Color = (props: any) => {
  /** useState的替代方案，在state逻辑较复杂并且包含子值等场景下较为实用 */
  const [color, dispatch] = useReducer(reducer, defaultColor.color);
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
