import React, { FC, useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { InputPhone } from "tezign-ui";
export const CjPhoneValidate: FC = () => {
  const a = isValidPhoneNumber("8 (800) 55-35-35", "RU");
  const b = isValidPhoneNumber("18013004596", "CA");
  console.log("国际手机号校验", a, b);
  const [areaCode, setAreaCode] = useState("+86");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <title>手机号校验</title>
      <div>
        <InputPhone
          phone={phone}
          placeholder="请输入手机号"
          onPhoneChange={setPhone}
          areaCode={areaCode}
          onPhoneBlur={()=>{}}
          onPhoneFocus={()=>{}}
          onAreaCodeChange={(code) => {
            console.log("code", code);
            setAreaCode(code);
          }}
        ></InputPhone>
      </div>
    </div>
  );
};
