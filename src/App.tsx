import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
// import { HtmlToImg } from "@/components/htmlToImg";
import { UseCallback1 } from "@/components/Study/useCallback/useCallback1";
function App() {
  console.log("改了控制大");
  return (
    <>
      <div>
        <title>react Study</title>
        <div className="cjyiz">
          <UseCallback1 />
        </div>
      </div>
    </>
  );
}

export default App;
