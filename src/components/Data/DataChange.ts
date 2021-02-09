export const binaryFun = (binary: any) => {
  let arr = binary.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return { u8arr, mime };
};
/**file格式转blob  */
export const fileToBlob = (files: File[]) => {
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {
    const obj = binaryFun(reader.result);
    /** 创建一个blob对象 */
    const blob = new Blob([obj.u8arr], { type: obj.mime });
    /** 创建一个blob url,IE11不兼容 */
    const url = window.URL.createObjectURL(blob);

    return blob;
  };
};
/**文件或blob转base64 Url  */
export const filesOrBlobToDataUrl = (obj: Blob | File, fn: Function) => {
  const file = new FileReader();
  file.readAsDataURL(obj);
  file.onload = (e) => {
    if (e.target) {
      fn(e.target.result);
    }
  };
};
/**  blob转file  */
// const newFile = new window.File([blobObj], files[0].name, {
//   type: files[0].type,
// });
