import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { LogoSvg } from "@/components/Study/svgUse/LogoSvg";
// import { HtmlToImg } from "@/components/htmlToImg";
import { CReducer } from "@/javascript/Reducer";
function App() {
  console.log("改了控制大");
  return (
    <>
      <div>
        <title>react Study</title>
        <CReducer />
      </div>
    </>
  );
}

export default App;
