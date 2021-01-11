import React, { FC, forwardRef, Ref } from "react";
// 使用forwardRef包裹后，外面使用的就可以传递ref给子元素
export const ForwardRef1 = forwardRef<HTMLDivElement>(
  (props, ref: Ref<any>) => {
    return (
      <div ref={ref} {...props}>
        sd
      </div>
    );
  }
);
