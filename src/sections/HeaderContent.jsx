import React from "react";
import { Box, Search } from "@motor-js/core";
// import { useLocation } from "react-router-dom";

const HeaderContent = (props) => {
  // let location = useLocation();
  // console.log(location.pathname);
  return (
    <Box
      gridArea="header"
      backgroundColor="brand"
      border="bottom"
      direction="row"
      align="center"
      padding="12px"
      size="large"
      overflow="hidden"
    >
      {props.children}
    </Box>
  );
};

export default HeaderContent;
