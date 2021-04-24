import React, { useContext } from "react";
import { Button } from "antd";
import { ColorContext } from "./Color";
export const CButton = () => {
  // 拿到传过来的dispatch
  const { dispatch } = useContext(ColorContext);
  const handleClick = (type: string, color: string) => {
    dispatch({
      type: "UPDATE_COLOR",
      color,
    });
  };
  return (
    <div>
      <Button onClick={() => handleClick("UPDATE_COLOR", "red")}>红色</Button>
      <Button onClick={() => handleClick("UPDATE_COLOR", "yellow")}>
        黄色
      </Button>
      <Button onClick={() => handleClick("UPUPUP", "blue")}>
        这个不更新颜色
      </Button>
    </div>
  );
};
