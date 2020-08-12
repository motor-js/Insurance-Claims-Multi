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
    border: { color: "brand" },
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
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
          <Line 
          height={height}
          cols={[
            { qField: "[Vehicle Type]", qLabel: "Vehicle Type" },
            // { qField: "[Claim Type]", qLabel: "Claim Type" },
            {
              qField: "=Sum({[State 1]}[Total Claim Cost])",
              qLabel: "Total Claim Costs",
              qNumFormat: {
                qType: "M",
                qnDec: 0,
                qUseThou: 1,
                qFmt: "£#,##0",
                qDec: ".",
                qThou: ",",
              },
            },
          ]}
        />
        </Box>
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
        </Box>
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
        </Box>
      </Box>
    </Box>
  );
};

export default PageContent;
