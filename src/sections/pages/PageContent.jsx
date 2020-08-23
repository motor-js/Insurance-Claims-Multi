import React from "react";
import { CurrentSelections, Grid, Line, Column, Table } from "@motor-js/core";

import Background from "../../images/motor.jpg";

const PageContent = () => {
  return (
    <Grid
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   backgroundRepeat: "no - repeat",
      //   backgroundAttachment: "fixed",
      //   backgroundSize: "cover",
      // }}
      rows={["80px", , "305px", "305px"]}
      columns={["repeat(2, 1fr)"]}
      areas={[
        ["selections", "selections"],
        ["table", "chart2"],
        ["table", "chart1"],
      ]}
    >
      <CurrentSelections minHeight="60px" gridArea="selections" />
      <Line
        curve="Natural"
        symbol="none"
        colorTheme={["#ff6961"]}
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
        gridArea="chart1"
      />
      <Column
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
        gridArea="chart2"
      />
      <Table
        size="small"
        height="570px"
        headerAlignment="leftRight"
        bodyAlignment="leftRight"
        interactiveSort
        pageHeight={24}
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
                // width: "5%",
                qNumType: "M",
                qNumFmt: "$#,##0.00",
              },
            ],
          },
        ]}
        bandedRows
        gridArea="table"
      />
    </Grid>
  );
};

export default PageContent;
