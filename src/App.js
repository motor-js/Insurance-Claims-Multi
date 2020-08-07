import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { navItems } from "./navItems";
import "./App.css";
import {
  FooterContent,
  HeaderContent,
  SidebarContent,
  MainContent,
  PageContent,
} from "./sections";
import {
  Grid,
  Box,
  useSidebar,
  BurgerMenu,
  NavItem,
  Filter,
} from "@motor-js/core";
import { Filter as styledFilter } from "@styled-icons/feather";
// import { Menu as styledMenu } from "@styled-icons/ionicons-solid";
// import { Home, X } from "react-feather";

const FilterIcon = styled(styledFilter)`
  color: white;
  padding: 0px 30px 0px 5px;
  position: absolute;
  right: 0;
`;

function App() {
  //use the Siderbar hook
  const { isOpen, toggle } = useSidebar();

  return (
    <Router>
      {/** NAVBAR */}
      <BurgerMenu
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        type="scaleRotate"
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
      </BurgerMenu>
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
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                marginLeft: "45px",
              }}
            >
              Insurance Claims Dashboard
              <span role="img" aria-label="peace_emoji">
                ✌️
              </span>
            </span>
            <FilterIcon onClick={toggle} size={25} />
          </HeaderContent>
          {/** SIDEBAR */}
          <SidebarContent onClick={toggle} isOpen={isOpen} />
          {/** MAIN */}
          <Box gridArea="main">
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/sales" component={PageContent} />
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
