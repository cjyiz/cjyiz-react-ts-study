import React, { FC } from "react";
import { Tree } from "antd";
interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

export const CTreeNode = () => {
  const dig = (path = "0", level = 3) => {
    const list = [];
    for (let i = 0; i < 10; i += 1) {
      const key = `${path}-${i}`;
      const treeNode = {
        title: key,
        key,
        children: level > 0 ? dig(key, level - 1) : null,
      };
      list.push(treeNode);
    }
    return list;
  };
  const treeData = dig();
  return (
    <div>
      <Tree treeData={treeData} height={233} defaultExpandAll />
    </div>
  );
};
