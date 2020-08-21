import React from "react";
import {
  // useScreenSize,
  CurrentSelections,
  Grid,
  KPI,
  Column,
} from "@motor-js/core";

import Background from "../../images/motor.jpg";
const PageContent = () => {
  return (
    <Grid
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no - repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      rows={["70px", "120px", "355px", "355px"]}
      columns={["repeat(8, 1fr)"]}
      areas={[
        [
          "selections selections selections selections selections selections selections selections ",
        ],
        ["kpi1 kpi1 kpi2 kpi2 kpi3 kpi3 kpi4 kpi4"],
        ["chart1 chart1 chart1 chart1 chart2 chart2 chart2 chart2"],
        ["chart3 chart3 chart3 chart3 chart4 chart4 chart4 chart4"],
      ]}
    >
      <CurrentSelections minHeight="60px" gridArea="selections" />
      <KPI
        cols={[
          "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1} ,[Claim Notification Date.autoCalendar.YearsAgo]={0} > } [ClaimCounter] )",
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi1"
      />
      <KPI
        cols={[
          "=Sum( { $< [Claim Settled Date.autoCalendar.InYTD]={1} ,[Claim Settled Date.autoCalendar.YearsAgo]={0} > } [ClaimCounter] )",
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi2"
      />
      <KPI
        cols={[
          {
            qField:
              "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1}, [Claim Notification Date.autoCalendar.YearsAgo]={0} > } [Total Claim Cost])/1000000",
            qLabel: "Margin Amount",
            qNumType: "M",
            qNumFmt: "$#,##0",
          },
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi3"
      />
      <KPI
        cols={[
          {
            qField:
              "=Avg( { $< [Claim Notification Date.autoCalendar.InYTD]={1} ,[Claim Notification Date.autoCalendar.YearsAgo]={0} > } [Total Claim Cost])",
            qNumType: "M",
            qNumFmt: "$#,##0",
          },
        ]}
        label="Claims Opened (YTD)"
        size="small"
        gridArea="kpi4"
      />
      <Column
        // height={height}
        height="340px"
        cols={[
          {
            qField: "[Claim Notification Date.autoCalendar.Year]",
            qLabel: "Claim Year",
          },
          {
            qField: "=Sum([Total Claim Cost])",
            qLabel: "Total Claim Cost",
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
        // stacked={true}
        suppressZero={true}
        textOnAxis="xAxis"
        // border={false}
        // chartColor={chartColor}
        gridArea="chart1"
      />
      <Column
        // height={height}
        height="340px"
        cols={[
          {
            qField: "[Claim Notification Date.autoCalendar.Year]",
            qLabel: "Claim Year",
          },
          {
            qField: "=Sum([Total Claim Cost])",
            qLabel: "Total Claim Cost",
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
        // stacked={true}
        suppressZero={true}
        textOnAxis="xAxis"
        // border={false}
        // chartColor={chartColor}
        gridArea="chart2"
      />{" "}
      <Column
        // height={height}
        height="340px"
        cols={[
          {
            qField: "[Claim Notification Date.autoCalendar.Year]",
            qLabel: "Claim Year",
          },
          {
            qField: "=Sum([Total Claim Cost])",
            qLabel: "Total Claim Cost",
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
        // stacked={true}
        suppressZero={true}
        textOnAxis="xAxis"
        // border={false}
        // chartColor={chartColor}
        gridArea="chart3"
      />
      <Column
        // height={height}
        height="340px"
        cols={[
          {
            qField: "[Claim Notification Date.autoCalendar.Year]",
            qLabel: "Claim Year",
          },
          {
            qField: "=Sum([Total Claim Cost])",
            qLabel: "Total Claim Cost",
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
        // stacked={true}
        suppressZero={true}
        textOnAxis="xAxis"
        // border={false}
        // chartColor={chartColor}
        gridArea="chart4"
      />
    </Grid>
  );
};

export default PageContent;
