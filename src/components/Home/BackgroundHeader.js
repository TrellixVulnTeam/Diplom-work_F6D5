import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../FontAwesome";
import '../../fonts/stylesheet.css';
import { Link, animateScroll as scroll } from "react-scroll";

const BgImage = styled.div`
  display: flex;
  background-image: url("./img/bgheader.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  padding: 320px 0 160px 0;
  
  @media (max-width: 991px){
    padding-top: 240px;
  }
  @media (max-width: 575px){
    padding-top: 190px;
  }
`

const BgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    font-size: 150px;
    font-family: 'Gotham';
    font-weight: 700;
    color: #fff;
    margin: 0 auto;
  }
  h2{
    font-size: 25px;
    font-family: 'Gotham';
    font-weight: 400;
    color: #11749e;
    letter-spacing: 5px;
  }
  div{
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    top: 90px;
    color: #fff;
  }
  span{
    font-size: 13px;
    margin-bottom: 15px;
  }
  svg{
    cursor: pointer;
  }
  svg:hover{
    color: #11749e;
  }
  
  @media (max-width: 991px){
    h1{
      font-size: 115px;
    }
  }
  @media (max-width: 767px){
    h1{
      font-size: 90px;
    }
    h2{
      font-size: 22px;
    }
  }
  @media (max-width: 575px){
    h1{
      font-size: 80px;
    }
  }
  @media (max-width: 500px){
    h1{
      font-size: 62px;
    }
    h2{
      font-size: 18px;
    }
  }
  @media (max-width: 400px){
    h1{
      font-size: 52px;
    }
    h2{
      font-size: 17px;
      letter-spacing: 3px;
    }
  }
  @media (max-width: 350px){
    h1{
      font-size: 45px;
    }
    h2{
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`

const BgHeader = () => {
    return(
        <BgImage>
            <div className='container'>
                <BgContent>
                    <h1>CREATIVES</h1>
                    <h2>POWERED BY HOMERION</h2>
                    <div>
                        <span>Scroll Down</span>
                        <Link to="about" smooth={true}>
                            <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} size='3x' />
                        </Link>
                    </div>
                </BgContent>
            </div>
        </BgImage>
    );
}


export default BgHeader;