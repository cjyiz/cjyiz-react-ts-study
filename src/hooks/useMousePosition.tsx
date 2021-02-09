import React, { useEffect, useState } from "react";
// 这是自定义hook,自定义不同地方复用的时候不会互相影响
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);
    return () => {
      // console.log('remove Effect',position.x)
      document.removeEventListener("mousemove", updateMouse);
    };
  }, []); 
  return position;
};

export default useMousePosition;
