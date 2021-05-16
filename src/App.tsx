import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { CUseContext } from "@/components/Study/useContext/CUseContext";
// import { CjText } from "./算法/test.js";
import { VisualDom } from "@/components/UI/VisualDom/VisualDom";
import { CTree } from "@/components/UI/CTree";
import { isMobile } from "@/utils/isMobile";
const lang = navigator.language;
console.log("获取的浏览器信息", navigator.userAgent);
const a = isMobile();
function App() {
  alert(`${a}${lang}手机语言配置${navigator.userAgent}`);
  return <div className="cjyiz">{/* <CTree /> */}</div>;
}

export default App;
