import React from "react";
import {
  Box,
  Table,
  useScreenSize,
  CurrentSelections,
  Line,
  Column,
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
        <Box
          // height="400px"
          width={dynamicWidth}
          {...boxProps}
          overflow="visible"
        >
          <Line
            height="400px"
            curve="Natural"
            symbol="none"
            chartColor={["#ff6961"]}
            border=""
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
        <Box
          // height="400px"
          width={dynamicWidth}
          {...boxProps}
          overflow="visible"
        >
          <Column
            height="400px"
            curve="Natural"
            symbol="none"
            chartColor={["#ff6961"]}
            border="none"
            showLegend={false}
            cols={[
              {
                qField: "[Claim Sub-Type]",
                qLabel: "Claim Sub-Type",
              },
              {
                qField: "=Sum([Total Claim Cost])",
                qLabel: "Total Claim Cost",
              },
            ]}
          />
        </Box>
      </Box>
      <Box
        width="100%"
        flex="grow"
        wrapProp={true}
        overflow="visible"
        direction={flexDirection}
      >
        <Box {...boxProps} overflow="visible">
          <Table
            margin="20px"
            size="small"
            height="100%"
            tableWidth="100%"
            wrapperWidth="100%"
            interactiveSort
            columns={[
              {
                dimensions: [
                  {
                    qField: "[Vehicle Type]",
                    qLabel: "Vehicle Type",
                    // width: "5%",
                    // width: "150px",
                  },
                  {
                    qField: "[Claim Settled Date]",
                    qLabel: "Claim Settled Date",
                    // width: "5%",
                  },
                  {
                    qField: "[Claim Type]",
                    qLabel: "Claim Type",
                    // width: "5%",
                  },
                  // {
                  //   qField: "[Vehicle Type]",
                  //   qLabel: "Vehicle Type",
                  //   width: "15%",
                  // },
                  {
                    qField: "[Claim Sub-Type]",
                    qLabel: "Claim Sub-Type",
                    // width: "7.5%",
                  },
                  {
                    qField: "[Claim Status]",
                    qLabel: "Claim Status",
                    // width: "5%",
                  },
                ],
                measures: [
                  {
                    qField: "=Sum([Total Claim Cost])",
                    qLabel: "Claim Cost",
                    width: "5%",
                  },
                ],
              },
            ]}
            bandedRows
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PageContent;
