import React from "react";
// import PropTypes from 'prop-types'
import logo from "../../assets/logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: OpenSans;
  padding: 30px 0;
  justify-content: center;
  background-color:  ${(props) => props.theme.color.ui_01};
  .text {
    color: ${(props) => props.theme.color.white};
    font-size: 15px;
    font-weight: bold;
    img {
      height: 30px;
    }
  }
`;
function Footer(props) {
  return (
    <Wrapper className="flex">
      <p className="text">Copyright © 2021.</p>
      <div className="text">
        <img src={logo} alt="logo" />
        ETSEA
      </div>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
