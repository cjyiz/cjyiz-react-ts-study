import React from "react";
import { CButton } from "./CButton";
import { ShowArea } from "./ShowArea";
import { Color } from "@/components/Study/useContext/Color";

export const CUseContext = () => {
  return (
    <div>
      {/* 引入Color组件，这样Color包裹的所有子组件都可以访问ColorContext的状态 */}
      <Color>
        <CButton />
        <ShowArea />
      </Color>
    </div>
  );
};
