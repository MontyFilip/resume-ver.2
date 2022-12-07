import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  border-bottom: black solid 0.1px;
`;

const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  /* padding-left: 5%; */
`;

const RightContainer = styled.div`
  /* flex: 50%; */
  display: flex;
  align-items: center;
  /* padding-left: 5%; */
`;
const NavabrInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
const NavbarLinkContainer = styled.div`
  display: flex;
`;
const NavbarLink = styled(NavLink)`
  color: white;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.headerFont};
  text-decoration: none;
  margin: 2rem;
  &:hover {
    color: black;
    transition: ${({ theme }) => theme.transitionTime};
  }
`;

const NavbarLogoLink = styled(NavLink)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 3rem;
  font-family: ${({ theme }) => theme.logoFont};
  text-decoration: none;
  margin: 3rem;
  &:hover {
    color: black;
    transition: ${({ theme }) => theme.transitionTime};
  }
`;

const NavabrExtendedContainer = styled.div``;
const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <NavabrInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLogoLink to="/">Filip Lysiak</NavbarLogoLink>
        </RightContainer>
      </NavabrInnerContainer>
      <NavabrExtendedContainer></NavabrExtendedContainer>
    </NavContainer>
  );
};

export default Navbar;
