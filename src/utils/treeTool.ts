import { clone } from "ramda";
export const setNewTreeData = (list: any[] = []) => {
  const a = clone(list);
  const loop = (list: any[] = []) => {
    list.forEach((item) => {
      if (item.children) {
        item.title = item.name;
        item.key = item.id;
      } else {
        item.title = item.userName;
        item.key = item.proUserId;
        item.children = item.members;
      }

      if (item.children && item.children.length) {
        // item.checkable = false;
        loop(item.children);
      } else {
        loop(item.members);
      }
    });
  };
  loop(a);
  console.log("处理后的数据", a);
  return a;
};
