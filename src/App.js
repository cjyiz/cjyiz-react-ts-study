import React from 'react';
import logo from './logo.svg';
import './App.css';
import DomToImg from './components/DomToImg/index'
import HtmlToImg from './components/htmlToImg.tsx'
// import domtoimage from 'dom-to-image';
function App() {
  // const node = document.getElementById('poster')
  // domtoimage.toPng(node).then((res)=>{
  //   console.log('这是生成的图片',res)
  // })
  return (
    <div className="App">
      {/* <div className='cjyiz' id='poster'>
      </div> */}
      这是study,这是我足以新的编辑
      <HtmlToImg />
      {/* <DomToImg /> */}
    </div>
  );
}

export default App;
