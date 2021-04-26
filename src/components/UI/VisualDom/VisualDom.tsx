import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
interface IList {
  value: string;
  key: number;
}
let list2: IList[] = [];
let i = 1000;
while (i > 0) {
  i--;
  list2.unshift({ value: `cjyiz${i}`, key: i });
}
export const VisualDom = () => {
  const visibleCount = 10;
  const listRef = useRef<HTMLDivElement>(null);
  //   默认600的高度，一次渲染可视10条数据
  const [listHeight, setListHeight] = useState(600);
  const [visibleList, setVisibleList] = useState<IList[]>([]);
  //   一开始渲染的列表数量
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(visibleCount);

  //   偏移量
  const [startOffset, setStartOffset] = useState(0);

  //   滚动事件
  const onscroll = (e: any) => {
    if (listRef.current) {
      let scrollTop = listRef.current.scrollTop;
      let startOffset = scrollTop - (scrollTop % 30);
      setStart(Math.floor(scrollTop / 30));
      const endIndex = start + visibleCount;
      setEnd(endIndex);
      setStartOffset(startOffset);
      console.log("滚动高度2", listRef.current.scrollTop, startOffset);
    }
  };
  useLayoutEffect(() => {
    const list = list2.slice(start, end);
    setVisibleList(list);
    setListHeight(30 * list2.length);
  }, []);

  useEffect(() => {
    const list = list2.slice(start, start + visibleCount);
    setVisibleList(list);
  }, [start]);
  return (
    <div
      ref={listRef}
      onScroll={onscroll}
      className="infinite-list-container"
      style={{
        height: "300px",
        overflow: "auto",
        width: "100%",
        border: "1px solid blue",
        position: "relative",
      }}
    >
      {/* 占位容器 */}
      <div
        className="infinite-list-phantom"
        style={{
          height: `${listHeight}px`,
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      {/* 实际列表 */}
      <div
        className="iniinite-list"
        style={{
          transform: `translate3d(0,${startOffset}px,0)`,
          position: "absolute",
          width: "90%",
          left: 0,
          top: 0,
          padding: "10px",
        }}
      >
        {visibleList.map((item, index) => {
          // 在这里先固定高度
          return (
            <div
              style={{
                height: "30px",
                width: "100%",
                border: "1px solid green",
              }}
            >
              12{item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
