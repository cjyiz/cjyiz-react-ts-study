import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { UseRef1 } from "@/components/Study/useRef/UseRef1";
import { Observable2 } from "@/components/Study/observable/Observable2";
import { CuseLayout } from "@/components/Study/useLayout/Uselayout1";
import { UseCallback1 } from "@/components/Study/useCallback/useCallback1";
import { CjTree } from "@/components/UI/tree";
import { CjPhoneValidate } from "@/components/UI/phoneValidate";
import { CjVideoPlayer } from "@/components/UI/VideoPlay";
import { CjEditor } from "@/components/UI/editor";
import { Button, Alert } from "tezign-ui";
import { Spin } from "tezign-ui";
import { CjText } from "./算法/test.js";
import { CBreadcrumb } from "@/components/UI/breadCurmb";
function App() {
  let email = "cjyiz@tezign.com";
  CjText();
  let password;
  const index = email.indexOf("@");
  password = email.slice(0, index);
  console.log("获取的邮箱前缀", password);
  return (
    <>
      <div className="cjyiz">
        <CBreadcrumb></CBreadcrumb>
        <Button
          onClick={() => {
            console.log("这是事件1");
          }}
        >
          点击按钮
        </Button>
        <Spin />
        {/* <CjTree /> */}
        {/* <CjPhoneValidate/> */}
        {/* <CjVideoPlayer /> */}
        {/* <CjEditor /> */}
        {/* <UseCallback1 /> */}
        {/* <div className="cjyiz2">
          <CuseLayout />
          <div className="box">
            <title>react Study</title>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
