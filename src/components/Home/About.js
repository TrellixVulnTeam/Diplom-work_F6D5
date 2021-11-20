import React from "react";
import styled from "styled-components";
import '../FontAwesome';
import '../../fonts/stylesheet.css';

const AboutBg = styled.section`
  background: #11749e;
  position: relative;
  text-align: center;
  padding: 100px 0;

  @media (max-width: 991px){
    padding: 70px 0;
  }
  @media (max-width: 500px){
    padding: 70px 0 30px 0;
  }
`

const Heading = styled.h2`
  text-transform: uppercase;
  font-family: 'Gotham';
  font-weight: 500;
  font-size: 38px;
  color: #fff;
  margin: 50px 0 100px 0;

  @media (max-width: 991px){
    font-size: 28px;
    margin-top: 30px;
    margin-bottom: 70px;
  }
  @media (max-width: 575px){
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 50px;
  }
  @media (max-width: 500px){
    margin-top: 0;
  }
  @media (max-width: 350px){
    font-size: 22px;
  }
`
const W = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'robotobold';
  font-size: 250px;
  color: #fff;
  opacity: 0.18;
  
  @media (max-width: 991px){
    font-size: 170px;
  }
  @media (max-width: 575px){
    font-size: 140px;
  }
`

const AboutArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 30px;
  
  @media (max-width: 767px){
    flex-wrap: wrap;
  }
`

const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  
  h3{
    text-transform: uppercase;
    color: #fff;
    font-size: 17px;
    font-family: 'Gotham';
    font-weight: 500;
    margin: 20px 0;
  }
  span{
    color: #fff;
    opacity: 0.8;
    font-size: 15px;
    font-family: 'Gotham';
    font-weight: normal;
    height: 70px;
    overflow: hidden;
  }

  @media (max-width: 991px){
    margin: 0 10px;
    
    h3{
      font-size: 15px;
    }
    span{
      font-size: 13px;
      height: 60px;
    }
  }
  @media (max-width: 767px){
    width: 45%;
    
    span{
      margin-bottom: 30px;
    }
  }
  @media (max-width: 500px){
    width: 100%;

    h3{
      font-size: 18px;
    }
    span{
      font-size: 15px;
      height: 70px;
    }
  }
`

const CircleBg = styled.div`
  background: #2e85aa;
  height: 135px;
  width: 135px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const About = () =>{
    return(
        <AboutBg id={'about'}>
            <div className='container'>
                <Heading>We Are An Awesome Agency</Heading>
                <W>W</W>
                <AboutArea>
                    <AboutItem>
                        <CircleBg>
                            <img src='./img/Write.png' alt='Write' />
                        </CircleBg>
                        <h3>Feature one</h3>
                        <span>
                            Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
                        </span>
                    </AboutItem>
                    <AboutItem>
                        <CircleBg>
                            <img src='./img/Write.png' alt='Write' />
                        </CircleBg>
                        <h3>Feature two</h3>
                        <span>
                            Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
                        </span>
                    </AboutItem>
                    <AboutItem>
                        <CircleBg>
                            <img src='./img/Search.png' alt='Write' />
                        </CircleBg>
                        <h3>Feature three</h3>
                        <span>
                            Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
                        </span>
                    </AboutItem>
                    <AboutItem>
                        <CircleBg>
                            <img src='./img/Say.png' alt='Write' />
                        </CircleBg>
                        <h3>Feature four</h3>
                        <span>
                            Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.
                        </span>
                    </AboutItem>
                </AboutArea>
            </div>
        </AboutBg>
    );
}

export default About;