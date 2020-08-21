import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import {
  FooterContent,
  HeaderContent,
  FilterContent,
  NavContent,
  MainContent,
  BoxDemoContent,
  PageContent,
} from "./sections";
import { Grid, Box, SmartHeading } from "@motor-js/core";

function App() {
  return (
    <Router>
      {/** NAVBAR */}
      <NavContent />
      <FilterContent />
      <div id="App">
        <Grid
          rows={["60px", "auto", "30px"]}
          cols={["auto"]}
          areas={[["header"], ["main"], ["footer"]]}
          backgroundColor="altGray1"
          id="page-wrap"
        >
          {/** HEADER */}
          <HeaderContent>
            <SmartHeading
              type="free"
              margin="0 0 0 45px"
              color="white"
              fontWeigh="bold"
            >
              Insurance Claims Dashboard
              <span role="img" aria-label="peace_emoji">
                ✌️
              </span>
            </SmartHeading>
          </HeaderContent>
          {/** MAIN */}
          <Box gridArea="main">
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/sales" component={PageContent} />
              <Route path="/boxDemo" component={BoxDemoContent} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Box>
          {/** FOOTER */}
          <FooterContent>
            <span style={{ color: "white" }}>
              made with
              <span
                role="img"
                aria-label="heart_emoji"
                style={{ padding: "0px 5px" }}
              >
                ❤️
              </span>
              by motor
            </span>
          </FooterContent>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
