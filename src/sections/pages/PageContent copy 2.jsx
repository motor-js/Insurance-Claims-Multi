import React from "react";
import {
  Box,
  Grid,
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
    <Grid
      rows={["minmax(80px, auto)"]}
      columns={["repeat(8, 1fr)"]}
      areas={[
        ["hd hd hd hd   hd   hd   hd   hd"],
        ["sd sd sd sd main main main main"],
        ["ft ft ft ft   ft   ft   ft   ft"],
      ]}
      backgroundColor="altGray1"
    >
      <div style={{ gridArea: "hd" }}>
        <CurrentSelections minHeight="60px" width="100%" />
      </div>
      <div style={{ gridArea: "sd" }}>
        <Line
          style={{ gridArea: "sd" }}
          height="400px"
          curve="Natural"
          symbol="none"
          chartColor={["#ff6961"]}
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
      </div>
      <div style={{ gridArea: "main" }}>
        <Column
          height="400px"
          curve="Natural"
          symbol="none"
          chartColor={["#ff6961"]}
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
      </div>
      <div style={{ gridArea: "ft" }}>
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
      </div>
    </Grid>
  );
};

export default PageContent;
