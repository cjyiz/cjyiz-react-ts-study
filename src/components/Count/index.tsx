import React, { useEffect, useState, useContext, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import useUrlLoader from "../../hooks/useUrlLoader";
import {ThemeContext} from "../../App";
interface IShowResult {
  message: string;
  status: string;
}
const Count: React.FC = () => {
  const [obj, setObj] = useState({ like: 0, on: true });
  // 在render里面中只有一个值
  const likeRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const ss = useMousePosition();
  const [data, loading] = useUrlLoader(
    "https://dog.ceo/api/breeds/image/random"
  );
  const dogUrl = data as IShowResult;
  const theme = useContext(ThemeContext);
 
  useEffect(() => {
    console.log("点击执行");
    document.title = `点击了${obj.like}次`;
  }, [obj.like]);
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <div>
      <button
      style={{color:theme.color,background:theme.background}}
        onClick={() => {
          setObj({ like: obj.like + 1, on: obj.on });
        }}
      >
        {obj.like}👍
      </button>
      <p>{ss.x}</p>
      {loading ? <p>购过读取中</p> : <img src={dogUrl && dogUrl.message} />}
      <button
        onClick={() => {
          setObj({ like: obj.like + 1, on: !obj.on });
        }}
      >
        {obj.on ? "on" : "off"}👍
      </button>

      <input type="text" ref={inputRef} />
    </div>
  );
};
export default Count;
