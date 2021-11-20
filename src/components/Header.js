import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontAwesome";
import '../fonts/stylesheet.css';
import $ from 'jquery';
import { Link } from "react-router-dom";

const Row = styled.div`
  display: flex;
  align-items: center;
  
  #menu-bar{
    display: none;
    color: #fff;
    cursor: pointer;
  }
  
  @media (max-width: 767px){
    justify-content: space-between;
    
    #menu-bar{
      display: block;
      font-size: 50px;
    }
  }
`
const Head = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 50;
`
const Logo = styled.div`
  width: 30%;
  text-align: center;
  
  img{
    cursor: pointer;
  }
  
  @media (max-width: 991px){
    width: 15%;
  }
  @media (max-width: 767px){
    width: 70%;
    text-align: left;
  }
`
const MainMenu = styled.div`
  width: 50%;
  padding-right: 80px;
  
  ul{
    display: flex;
    list-style: none;
    justify-content: space-evenly;
  }
  ul li a{
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  ul li:hover a{
    border-bottom: 5px solid #11749e;
    color: #1698D0;
    padding-bottom: 40px;
  }
  ul li a.active{
    border-bottom: 5px solid #11749e;
    padding-bottom: 40px;
  }
  
  @media (max-width: 991px){
    width: 70%;
    padding-right: 0;
  }
  @media (max-width: 767px){
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    background: #11749e;
    width: 100%;
    padding-right: 0;
    z-index: 10;
    -webkit-box-shadow: 0px 5px 15px 6px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0px 5px 15px 6px rgba(0, 0, 0, 0.6);
    box-shadow: 0px 5px 15px 6px rgba(0, 0, 0, 0.6);


    ul{
      flex-direction: column;
      text-align: center;
    }
    ul li{
      width: 100%;
    }
    ul li a{
      display: inline-block;
      width: 100%;
      padding: 20px 0;
      text-transform: uppercase;
      font-size: 22px;
    }
    ul li:hover{
      -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.5) inset;
      -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.5) inset;
      box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.5) inset;
    }
    ul li:hover a{
      border-bottom: none;
      padding-bottom: 20px;
      color: #fff;
    }
    ul li a.active{
      border-bottom: none;
      padding-bottom: 20px;
      color: #222;
    }
  }
`
const Contacts = styled.div`
  width: 20%;
  
  svg{
    margin: 0 8px;
    cursor: pointer;
    color: #fff;
  }
  svg:hover{
    color: #1698D0;
  }

  @media (max-width: 991px){
    width: 15%;
    
    svg{
      margin: 0 5px;
    }
  }
  @media (max-width: 767px){
    display: none;
  }
`

const BurgerBtn = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  display: none;
  z-index: 11;
  transition: all 1s ease-out;
  
  :before{
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    background-color: #fff;
    height: 2px;
    transition: all 0.5s ease-out;
  }
  :after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 30px;
    background-color: #fff;
    height: 2px;
    transition: all 0.5s ease-out;
  }
  span{
    position: absolute;
    top: 14px;
    width: 30px;
    background-color: #fff;
    height: 2px;
  }
  
  @media (max-width: 767px){
    display: block;
  }
`

let mobile = false;
const MenuOpen = () => {
    if ($('.nav-menu').css('display') === 'none'){
        $('.nav-menu').show("slow");
        $('.burgerBtn').addClass('close');
        mobile = true;
    } else {
        $('.nav-menu').hide("slow");
        $('.burgerBtn').removeClass('close');
        mobile = false;
    }
}
const LinkClick = () => {
    if (mobile === true) {
        $('.nav-menu').hide("slow");
        $('.burgerBtn').removeClass('close');
        mobile = false;
    }
}

const Header = () => {
    return(
        <Head>
            <div className='container'>
                <Row>
                    <Logo>
                        <a href='/'><img src='./img/logo.png' alt='CS' /></a>
                    </Logo>
                    <MainMenu className={'nav-menu'}>
                        <ul>
                            <li><Link to={'/'} id={'home'} className={'active'} onClick={LinkClick}>Home</Link></li>
                            <li><Link to={'/services'} id={'services'} onClick={LinkClick}>Services</Link></li>
                            <li><Link to={'/our-work'} id={'work'} onClick={LinkClick}>Our work</Link></li>
                            <li><Link to={'/reviews'} id={'reviews'} onClick={LinkClick}>Reviews</Link></li>
                            <li><Link to={'/contacts'} id={'contacts'} onClick={LinkClick}>Contact us</Link></li>
                        </ul>
                    </MainMenu>
                    <Contacts>
                        <a href={'https://facebook.com'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href={'https://twitter.com'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href={'https://skype.com'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'skype']} /></a>
                        <a href={'https://instagram.com'} target={'_blank'}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    </Contacts>
                    <BurgerBtn className={'burgerBtn'} onClick={MenuOpen}><span className={'burgerBtnSpan'} /></BurgerBtn>
                </Row>
            </div>
        </Head>
    );
}

export default Header;