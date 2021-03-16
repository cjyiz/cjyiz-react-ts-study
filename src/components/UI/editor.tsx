import React, { FC, useState, useRef, useEffect } from "react";
import { Editor,Button } from "tezign-ui";
// import 'tezign-ui/lib/index.js'; 
function uploadFile() {
  // 本地模拟
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(
        "https://www.apple.com/v/mac/home/af/images/overview/hero/imac__dlz2ciyr6hm6_large.jpg"
      );
    }, 3000);
  });
}
const defaultHtml = ` <p><span style="color: #68bc00;">富文本编辑器演示</span></p>
<ol>
<li>支持文字大小设置</li>
<li>支持文字颜色设置</li>
</ol>
<ul>
<li>支持有序列表</li>
<li style="text-align:center;">支持无序列表</li>
<li>支持<a href="http://www.tezign.com" target="_blank">链接</a></li>
</ul>
     `;
const toolbar = {
  options: Editor.RECOMMEND_TOOLBAR_OPTIONS,
  video: {
    // 这里上传视频使用指定的上传方法
    upload() {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("https://video.tezign.com/home/tezign_brand_video_zh.mp4");
        }, 8000);
      });
    },
  },
};

export const CjEditor: FC = () => {
  const [html, setHtml] = useState("");
  const refEditor = useRef(null);
  const handleHtmlChange = (html: any) => {
    setHtml(html);
    console.log("打印的文本", html);
  };
  useEffect(() => {
    setHtml(defaultHtml);
  }, []);
  return (
    <div>
      <Button>我们按钮</Button>
      <Editor
        html={html}
        onHtmlChange={handleHtmlChange}
        toolbar={toolbar}
        // toolbarHidden={true}
        ref={refEditor}
      />
    </div>
  );
};
