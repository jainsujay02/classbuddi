import React from "react";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/ClassBuddi-logo.svg";

const Nav = styled.nav`
  background: #f5f5f5;
  height: 88px;
  display: flex;
  justify-content: right;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const NavLink = styled(Link)`
  color: #333333;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  margin: 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /*margin-right: -24px;*/
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  img {
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
    height: 13%;
    width: max-width;
    margin-left: 1rem;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            <ImageContainer>
              <img src={Logo} alt="Logo" />
            </ImageContainer>
          </NavLink>
          <NavLink to="/about">about us</NavLink>
          <NavLink to="/join">join</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
