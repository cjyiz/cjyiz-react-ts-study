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
import { Button } from "antd";
import { Spin } from "tezign-ui";
import { CjText } from "./算法/test.js";
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
        {/* <Button type="primary">Primary</Button>
        <Button /> */}
        {/* <Spin /> */}
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
