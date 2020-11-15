import React, { useEffect, useState } from "react";
import "./App.css";
// import DomToImg from "./components/DomToImg/index";
// import HtmlToImg from "./components/htmlToImg.tsx";
import Count from "./components/Count";
// import Mouse from "./components/Position";
// import useMousePosition from "./hooks/useMousePosition";
import useUrlLoader from "./hooks/useUrlLoader";
interface IShowResult {
  message: string;
  status: string;
}
interface IThemenProps {
  [key: string]: { color: string; background: string };
}
const themes: IThemenProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#000",
  },
};
export const ThemeContext = React.createContext(themes.light);
// import domtoimage from 'dom-to-image';
const App: React.FC = () => {
  // const node = document.getElementById('poster')
  // domtoimage.toPng(node).then((res)=>{
  //   console.log('这是生成的图片',res)
  // })
  const [show, setShow] = useState(true);
  // 这里第二个参数就是用来监控他变化的
  const [
    data,
    loading,
  ] = useUrlLoader("https://dog.ceo/api/breeds/image/random", [show]);
  const dogUrl = data as IShowResult;
  // const position = useMousePosition();
  useEffect(() => {
    console.log("会打印嘛");
  });
  return (
    <div className="App">
      {/* <div className='cjyiz' id='poster'>
      </div> */}
      <ThemeContext.Provider value={themes.dark}>
        <Count />
      </ThemeContext.Provider>

        {/* <button
          onClick={() => {
            setShow(!show);
          }}
        >
          点击切换图片
        </button> */}
        {/* <Mouse /> */}
        {/* {loading ? <p>狗狗读取中</p> : <img src={dogUrl && dogUrl.message} />} */}
        {/* <HtmlToImg /> */}
        {/* <DomToImg /> */}
    </div>
  );
};

export default App;
