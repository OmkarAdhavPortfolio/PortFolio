import React from 'react';
import styled from 'styled-components';
import { auth } from '../auth/firebase'; // Adjust the path as needed

const Header = () => {
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <Navbar>
      <Section1>
        <Imglogo src='./img/logo.png' />
      </Section1>

      <Section2>
        <ELE>About us</ELE>
        <ELE>Third Party testing and certification</ELE>
        <ELE>Services</ELE>
        <ELE>Digital Certification</ELE>
        <ELE>Clients</ELE>
        <ELE>Contact us</ELE>
        <ELE as="button" onClick={handleLogout}>Logout</ELE>
      </Section2>
    </Navbar>
  );
};

export default Header;

const Imglogo = styled.img`
  /* Add styles for the logo if needed */
`;

const Navbar = styled.div`
  width: calc(100% - 8%);
  height: 60px;
  display: flex;
  flex-direction: row;
  margin: 0 4%;
`;

const Section1 = styled.div`
  width: 20%;
  height: 100%;
  padding-top: 10px;
`;

const Section2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ELE = styled.section`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  width: auto;
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
  padding: 0 20px;
  margin: 4px 4px;
  cursor: pointer;

  /* Button styles for the logout element */
  ${(props) => props.as === 'button' && `
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 20px;
    margin: 4px 4px;
    color: #333;
    outline: none;
    
    &:hover {
      color: red; /* Change the color on hover if desired */
    }
  `}
`;
