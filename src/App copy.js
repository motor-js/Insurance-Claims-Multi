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
import { Grid, Box, useSidebar, BurgerMenuSideBar } from "@motor-js/core";
import { Filter as styledFilter } from "@styled-icons/ionicons-solid";
import { Menu as styledMenu } from "@styled-icons/ionicons-solid";

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
    <div id="App">
      <BurgerMenuSideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <h1>Cool Restaurant 🍔🍕</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}

export default App;
