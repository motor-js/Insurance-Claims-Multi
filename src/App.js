import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import {
  FooterContent,
  HeaderContent,
  SidebarContent,
  NavbarContent,
  MainContent,
  PageContent,
} from "./sections";
import {
  Grid,
  Box,
  useSidebar,
  BurgerMenuSideBar,
  NavItem,
} from "@motor-js/core";
import { Filter as styledFilter } from "@styled-icons/ionicons-solid";
import { Menu as styledMenu } from "@styled-icons/ionicons-solid";
// import { Home, X } from "react-feather";

const FilterIcon = styled(styledFilter)`
  color: white;
  padding: 0px 30px 0px 5px;
  position: absolute;
  right: 0;
`;
const MeniIcon = styled(styledMenu)`
  color: white;
  padding: 0px 30px 0px 5px;
`;

function App() {
  //use the Siderbar hook
  const { isOpen, toggle } = useSidebar();
  const [showNav, toggleNav] = useState(false);

  return (
    <Router>
      <Grid
        rows={["60px", "auto", "30px"]}
        cols={["auto"]}
        areas={[["header"], ["main"], ["footer"]]}
        backgroundColor="altGray1"
      >
        {/** HEADER */}
        <HeaderContent>
          {/* <MeniIcon onClick={toggleNav} size={25} /> */}
          <span style={{ color: "white", fontWeight: "bold" }}>
            Insurance Claims Dashboard
            <span role="img" aria-label="peace_emoji">
              ✌️
            </span>
          </span>
          <FilterIcon onClick={toggle} size={25} />
        </HeaderContent>
        {/** SIDEBAR */}
        <SidebarContent onClick={toggle} isOpen={isOpen} />
        {/* <BurgerMenuSideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
         */}
        <BurgerMenuSideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          type="push"
        >
          <NavItem path="/" name="Home" css="fa fa-fw fa-home" key={1}>
            {/* <Home /> */}
          </NavItem>
          <NavItem
            path="/sales"
            name="Executive Sales"
            css="fa fa-fw fa-home"
            key={2}
          />
          {/* <NavItem
            path="/burger-menu"
            name="Burger"
            css="fa fa-fw fa-home"
            key={3}
          /> */}
          {/* <a className="menu-item" href="/">
            <Home /> 
            Home
          </a> */}
          {/* <a
            className="menu-item"
            href="/sidebar"
            style={{ color: "blue", background: "yellow" }}
          >
            Burgers
          </a>
          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>
          <a className="menu-item" href="/desserts" style={{ color: "brand" }}>
            Desserts
          </a> */}
          {/* <Filter label="Claim Status" dimension={["Claim Status"]} />
          <Filter label="Claim Type" dimension={["Claim Type"]} />
          <Filter label="Claim Sub-Type" dimension={["Claim Sub-Type"]} />
          <Filter label="Broker" dimension={["BrokerName"]} /> */}
        </BurgerMenuSideBar>
        {/** NAVBAR */}
        {/* <NavbarContent onClick={toggleNav} showNav={showNav} /> */}
        {/** MAIN */}
        <Box gridArea="main">
          {/* <MainContent />
           */}
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
    </Router>
  );
}

export default App;
