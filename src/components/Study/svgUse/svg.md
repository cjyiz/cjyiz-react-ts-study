# 使用方法
 - 1.直接import
```
import svg from '@/XX/XX.SVG'
```
- 2.使用component组件
  ```
  import { ReactComponent as Logo } from "./logo.svg"
  ```
- 3.写成react组件形式
fill或者stroke使用`currentColor`替代。这样外面可以改颜色
```
export const SingleColorIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.9">
      <rect x="2.2" y="18.8572" width="17.6" height="3.14286" rx="1.57143" fill="currentColor" />
    </g>
  </svg>
);
```
