import React from "react";
import {
  Box,
  useScreenSize,
  CurrentSelections,
  KPI,
  Bar,
  Column,
  Pie,
} from "@motor-js/core";

const BoxDemoContent = () => {
  const { screen } = useScreenSize();

  const height = "315px";

  let flexDirection = "column";
  if (screen === "desktop" || screen === "largeDesktop") flexDirection = "row";

  const boxProps = {
    backgroundColor: "white",
    //border: { color: "brand" },
    elevation: "0 8px 6px -6px #ccc",
    margin: "5px",
    borderRadius: "8px",
  };

  const dynamicWidth = "calc(50% - 10px)";

  return (
    <Box padding="10px" width="100%" overflow="scroll" direction="column">
      <CurrentSelections minHeight="60px" width="100%" />
      <Box width="100%" direction={flexDirection}>
        <Box flex={true} height="120px" {...boxProps}>
          <KPI
            onClick={() => {
              window.confirm("You've clicked me!");
            }}
            cols={[
              "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1} ,[Claim Notification Date.autoCalendar.YearsAgo]={0} > } [ClaimCounter] )",
            ]}
            label="Claims Opened (YTD)"
            size="small"
            border={false}
            backgroundColor="white"
            // border={false}
          />
        </Box>
        <Box flex={true} height="120px" {...boxProps}>
          <KPI
            cols={[
              "=Sum( { $< [Claim Settled Date.autoCalendar.InYTD]={1} ,[Claim Settled Date.autoCalendar.YearsAgo]={0} > } [ClaimCounter] )",
            ]}
            label="Claims Settled (YTD)"
            size="small"
            border={false}
          />
        </Box>
        <Box flex={true} height="120px" {...boxProps}>
          <KPI
            cols={[
              {
                qField:
                  "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1}, [Claim Notification Date.autoCalendar.YearsAgo]={0} > } [Total Claim Cost])/1000000",
                qLabel: "Margin Amount",
                qNumType: "M",
                qNumFmt: "£#,##0",
                // qNumFormat: {
                //   qType: "M",
                //   qnDec: 0,
                //   qUseThou: 1,
                //   qFmt: "£#,##0",
                //   qDec: ".",
                //   qThou: ",",
                // },
              },
            ]}
            roundNum={false}
            label="Claim Payments (YTD)"
            size="small"
            border={false}
          />
        </Box>
        <Box flex={true} height="120px" {...boxProps}>
          <KPI
            cols={[
              {
                qField:
                  "=Avg( { $< [Claim Notification Date.autoCalendar.InYTD]={1} ,[Claim Notification Date.autoCalendar.YearsAgo]={0} > } [Total Claim Cost])",
                qNumType: "M",
                qNumFmt: "£#,##0",
              },
            ]}
            roundNum={false}
            label="Ave Claim Costs (YTD)"
            size="small"
            border={false}
          />
        </Box>
      </Box>

      <Box width="100%" flex="grow" wrapProp={true} overflow="visible">
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
          <Bar
            height={height}
            cols={[
              {
                qField: "[Claim Notification Date.autoCalendar.Year]",
                qLabel: "Claim Year",
              },
              {
                qField: "[Claim Type]",
                qLabel: "Claim Type",
              },
              {
                qField:
                  "=Sum( { $< [Claim Notification Date.autoCalendar.InYTD]={1} > } [ClaimCounter] )",
                qLabel: "Claims Opened (All Yrs YTD)",
              },
            ]}
            stacked={true}
            suppressZero={true}
            textOnAxis="xAxis"
            border={false}
          />
        </Box>
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
          <Column
            height={height}
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
            suppressZero={true}
            title="Total Claims Cost"
            border={false}
            showLegend={false}
          />
        </Box>
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
          <Bar
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
            suppressZero={true}
            showLegend={false}
            suppressScroll={true}
            title={"Total claim cost"}
            border={false}
          />
        </Box>
        <Box width={dynamicWidth} {...boxProps} overflow="visible">
          <Pie
            height={height}
            cols={[
              { qField: "[Claim Type]", qLabel: "Claim Type" },
              {
                qField: "=Sum([Total Claim Cost])",
                qLabel: "Total Claim Costs",
              },
            ]}
            border={false}
            showLegend={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BoxDemoContent;