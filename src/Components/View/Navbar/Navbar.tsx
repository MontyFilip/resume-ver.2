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
  @media (max-width: 640px){
    /* position: relative; */
  }
  @media (max-width: 500px){
    
  }
`;

const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  /* padding-left: 5%; */
  @media (max-width: 648px){
    
  }
`;

const RightContainer = styled.div`
  /* flex: 50%; */
  display: flex;
  align-items: center;
  /* padding-left: 5%; */
  @media (max-width: 648px){
    
  }
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
  color: ${({ theme }) => theme.color};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.headerFont};
  text-decoration: none;
  margin: 2rem;
  &:hover {
    color: black;
    transition: ${({ theme }) => theme.transitionTime};
  }
  @media (max-width: 900px){
    font-size: 2rem;
    margin: 1rem;
  }
  @media (max-width: 648px){
    font-size: 1.8rem;
    margin: 0.3rem;
  }
`;
const ActiveNavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.headerFont};
  text-decoration: none;
  margin: 2rem;
  &:hover {
    color: black;
    transition: ${({ theme }) => theme.transitionTime};
  }
  @media (max-width: 900px){
    font-size: 2rem;
    margin: 1rem;
  }
  @media (max-width: 648px){
    font-size: 1.8rem;
    margin: 0.3rem;
  }
`;

const NavbarLogoLink = styled(NavLink)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 3rem;
  font-family: ${({ theme }) => theme.logoFont};
  text-decoration: none;
  margin: 3rem;
  text-align: center;
  &:hover {
    color: black;
    transition: ${({ theme }) => theme.transitionTime};
  }
  @media (max-width: 850px){
    font-size: 2.7rem;
    margin: 2rem;
  }
  @media (max-width: 648px){
    font-size: 2.3rem;
    margin: 1rem;
  }
  @media (max-width: 480px){
    font-size: 2rem;
  }
`;
// try to implement active styles on navbar. 
// const NavabrExtendedContainer = styled.div``;
const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <NavabrInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {/* <NavbarLink to="/">Home</NavbarLink> */}
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLogoLink to="/">Filip Lysiak</NavbarLogoLink>
        </RightContainer>
      </NavabrInnerContainer>
      {/* <NavabrExtendedContainer></NavabrExtendedContainer> */}
    </NavContainer>
  );
};

export default Navbar;
