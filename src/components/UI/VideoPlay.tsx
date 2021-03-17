import React, { FC, useEffect, useState } from "react";
// import { VideoPlayer, Button } from "tezign-ui";
// import 'tezign-ui/lib/video-player/style/index';
// import 'tezign-ui/lib/video-player/style/css'
// import "./index.css";
const tezignUI = require("tezign-ui");
require('tezign-ui/lib/video-player/style/css')
console.log("新加载的模块", tezignUI);
const { VideoPlayer } = tezignUI;
const state = {
  source: "https://video.tezign.com/home/tezign_brand_video_zh.mp4",
  poster:
    "https://static-test.tezign.com/tezign-web-enterprise/images/1-410e590a4aa35e07f636b6fa0a012a1e.png",
};

export const CjVideoPlayer: FC = () => {
  const [source, setSource] = useState<string>("");
  const [poster, setPoster] = useState<string>("");
  useEffect(() => {
    setSource(state.source);
    setPoster(state.poster);
  }, []);
  return (
    <div>
      {/* <video src={source} controls width='300'> </video> */}
      <VideoPlayer
        source={source}
        poster={poster}
        download="Test Video"
        height="500px"
        fit="flex"
        className="cc"
      />
      <br />
      <br />
    </div>
  );
};
