import React from "react";
import { Tree } from "antd";
import "../../../node_modules/antd/lib/tree/style/css";
import { setNewTreeData } from "@/utils/treeTool";
const data = require("../../mock/mock.json");
console.log("返回的数据", data.result[0]);

// interface treeNode: {
//     title: string;
//     icon?: string;
//     key: string;
//     disabled?: boolean;
//     children?: any[];
//   }
const newTreeData = setNewTreeData(data.result[0].children);
const onSelect = () => {
  console.log("选中树");
};
const onCheck = () => {
  console.log("勾选状态");
};
export const CTree = () => {
  return (
    <div style={{ overflow: "auto" }}>
      <Tree
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={newTreeData}
      ></Tree>
    </div>
  );
};
