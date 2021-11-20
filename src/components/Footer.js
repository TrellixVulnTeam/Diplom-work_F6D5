import React from "react";
import styled from "styled-components";

const BgFooter = styled.footer`
  padding: 41px 0;
  background: #222;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  font-size: 10px;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  a {
    color: purple;
    text-decoration: none;
  }

  a:hover {
    color: #6d03c5;
    text-shadow: 0 0 10px blue;
  }

  @media (max-width: 991px){
    padding: 20px 0;
  }
`

const Footer = () => {
    return(
        <BgFooter>
            <h2>Created by <a href={'https://vk.com/homerioni'} target={'_blank'}>Homerion</a></h2>
        </BgFooter>
    );
}

export default Footer;