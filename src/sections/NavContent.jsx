import React from "react";
import { SidebarNext, SmartHeading, NavItem } from "@motor-js/core";
import { navItems } from "./navItems";

const Logo = require("../images/logo.png");

const NavContent = (props) => {
  return (
    <SidebarNext
      headerHeight="200px"
      pageWrapId={"page-wrap"}
      outerContainerId={"App"}
      type="scaleRotate"
      overlayBackground="rgba(255,0,0,0.3)"
      openIconColor="white"
      header={
        <div style={{ color: "#ff6961" }}>
          <a href="http://motor-js.io//">
            <img src={Logo} style={{ width: "25%" }} alt={"logo"} />
          </a>
          <SmartHeading type="appName" />
        </div>
      }
      footer={
        <SmartHeading size={"16px"} color={"brand"} asDate>
          Last Reloaded :
        </SmartHeading>
      }
    >
      {navItems.map((item) => {
        return (
          <NavItem
            path={item.path}
            name={item.name}
            css={item.css}
            key={item.key}
          ></NavItem>
        );
      })}
    </SidebarNext>
  );
};

export default NavContent;
