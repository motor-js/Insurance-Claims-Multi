import React, { useState } from "react";
import { Box, Filter, Sidebar } from "@motor-js/core";
import styled from "styled-components";

import { Menu as styledMenu } from "@styled-icons/ionicons-solid";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

const MeniIcon = styled(styledMenu)`
  color: black;
  padding: 0px 10px 0px 5px;
`;

const items = [
  {
    path:
      "/" /* path is used as id to check which NavItem is active basically */,
    name: "Home",
    css: "fa fa-fw fa-home",
    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
  },
  {
    path: "/about",
    name: "About",
    css: "fa fa-fw fa-clock",
    key: 2,
  },
  {
    path: "/NoMatch",
    name: "NoMatch",
    css: "fas fa-hashtag",
    key: 3,
  },
];

const NavbarContent = (props) => {
  const [path, setPath] = useState("/");

  const toggleNav = () => {
    props.onClick();
  };

  const itemClick = (e) => {
    // console.log(e.target.name);
    setPath(e.target.path);
    // this.setState({ activePath: path });
  };

  return (
    <Sidebar
      width="30%"
      collapsable
      direction="column"
      padding="15px 12px"
      isOpen={props.showNav}
      backgroundColor="altGray1"
      justifyContent="top"
      border={{ color: "brand" }}
    >
      <Box direction="column" overflow="visible">
        <Box
          gridArea="header"
          // backgroundColor="brand"
          // border="bottom"
          border={{ side: "bottom", color: "brand" }}
          padding="0px 0px 10px 0px"
          direction="row"
          align="center"
          // padding="12px"
          size="large"
          overflow="hidden"
        >
          <MeniIcon onClick={toggleNav} size={25} />
          Filters
        </Box>
        <Box direction="column" padding="0px 0px 0px 30px" overflow="visible">
          {items.map((item) => {
            return (
              // <NavItem
              <NavItem
                // data-path={item.path}
                path={item.path}
                name={item.name}
                css={item.css}
                onClick={itemClick}
                // active={item.path === activePath}
                key={item.key}
              />
            );
          })}
        </Box>
      </Box>
    </Sidebar>
  );
};

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0; /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "red")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

const NavItem = (props) => {
  // const NavItem {
  const handleClick = (e) => {
    // const { path, onItemClick } = this.props;
    // onItemClick(path);
    console.log(e.target);
  };

  // const { active } = this.props;

  return (
    <StyledNavItem>
      {/* <StyledNavItem active={active}> */}
      <Link to={props.path} className={props.css} onClick={handleClick}>
        {/* <NavIcon></NavIcon> */}
        {props.name}
      </Link>
    </StyledNavItem>
  );
};

export default NavbarContent;
