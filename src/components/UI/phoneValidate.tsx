import React, { FC } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";

export const CjPhoneValidate: FC = () => {
  const a = isValidPhoneNumber("8 (800) 55-35-35", "RU");
  const b = isValidPhoneNumber("18013004596", "CA");
  console.log("国际手机号校验", a, b);
  return (
    <div>
      <title>手机号校验</title>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};
