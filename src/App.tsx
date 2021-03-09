import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { UseRef1 } from "@/components/Study/useRef/UseRef1";
import { Observable2 } from "@/components/Study/observable/Observable2";
import { CuseLayout } from "@/components/Study/useLayout/Uselayout1";
import { UseCallback1 } from "@/components/Study/useCallback/useCallback1";

function App() {
  let email = "cjyiz@tezign.com";
  let password
  const index = email.indexOf("@");
  password = email.slice(0, index);
  console.log("获取的邮箱前缀", password);
  return (
    <>
      <div className="cjyiz">
        <UseCallback1 />
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
