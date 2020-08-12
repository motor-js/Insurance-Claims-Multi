import React from "react";
import {
  Box,
  useScreenSize,
  CurrentSelections,
  Line,
} from "@motor-js/core";

const PageContent = () => {
  const { screen } = useScreenSize();

  const chartColor = "red";
  const height = "315px";

  let flexDirection = "column";
  if (screen === "desktop" || screen === "largeDesktop") {
    flexDirection = "row";
  }

  const boxProps = {
    backgroundColor: "white",
    elevation: "0 8px 6px -6px #ccc",
    margin: "5px",
    borderRadius: "8px",
  };

  const dynamicWidth = "calc(50% - 10px)";

  return (
    <Box padding="10px" width="100%" overflow="scroll" direction="column">
      <CurrentSelections minHeight="60px" width="100%" />
      <Box
        width="100%"
        flex="grow"
        wrapProp={true}
        overflow="visible"
        direction={flexDirection}
      >
        <Box height='400px' width={dynamicWidth} {...boxProps} overflow="visible">
        <Line
          height='400px'
          curve='Natural'
          symbol='none'
          chartColor={['#ff6961']}
          border=''
          areaChart
          cols={[
            {
              qField: "[Claim Settled Date]",
              qLabel: "Claim Settled Date",
            },
            {
              qField: "=Sum([Total Claim Cost])",
              qLabel: "Total Claim Cost",
            },
          ]} 
        />
        </Box>
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
        </Box>
      </Box>
    </Box>
  );
};

export default PageContent;
