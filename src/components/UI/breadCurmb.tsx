import React, { FC } from "react";
import { Breadcrumb } from "tezign-ui";

export const CBreadcrumb = () => {
  return (
    <div style={{ width: "300px" }}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
