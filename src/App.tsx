import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { CUseContext } from "@/components/Study/useContext/CUseContext";
// import { CjText } from "./算法/test.js";
import { VisualDom } from "@/components/UI/VisualDom/VisualDom";
function App() {
  return (
    <div className="cjyiz">
      <VisualDom />
    </div>
  );
}

export default App;
