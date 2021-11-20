import React from 'react';
import styled from "styled-components";
import $ from "jquery";

const Main = styled.div`
  padding-top: 109px;
  background-image: url("./img/KeyFeature.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
`

const Row = styled.div`
  display: flex;
  margin-top: 50px;
  height: 600px;
  
  :nth-child(2){
    height: 480px;
    margin: 0;
  }
  
  @media (max-width: 991px){
    flex-direction: column;
    height: auto;
  }
`

const WorkItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 5%;
  margin-bottom: 30px;
  
  .calc{
    width: 55%;
  }
  .calc:hover{
    width: 65%;
  }
  
  @media (max-width: 991px){
    width: 100%;
  }
`

const WorkItemImg = styled.img`
  width: 90%;
  border-radius: 5px;
  transition: 0.7s ease-out;
  
  :hover{
    width: 100%;
  }
`

const WorkItemName = styled.h2`
  margin: 20px 0;
  font-size: 28px;
  color: #fff;
  font-family: 'Gotham';
  font-weight: 500;
  
  a{
    text-decoration: none;
    color: inherit;
  }
  a:hover{
    color: #11749e;
  }
`

const OurWork = () => {
    $('.active').removeClass('active');
    $('#work').addClass('active');
    return (
        <Main>
            <div className={'container'}>
                <Row>
                    <WorkItem>
                        <a href={'https://homerioni.github.io/alum-wallet/'} target={'_blank'}>
                            <WorkItemImg src={'./img/alum-wallet.png'} />
                        </a>
                        <WorkItemName>
                            <a href={'https://homerioni.github.io/alum-wallet.github.io/'} target={'_blank'}>Алюминиевый кошелек</a>
                        </WorkItemName>
                    </WorkItem>
                    <WorkItem>
                        <a href={'https://homerioni.github.io/led-alarm/'} target={'_blank'}>
                            <WorkItemImg src={'./img/led-alarm.png'} />
                        </a>
                        <WorkItemName>
                            <a href={'https://homerioni.github.io/led-alarm/'} target={'_blank'}>LED Будильник</a>
                        </WorkItemName>
                    </WorkItem>
                </Row>
            </div>
        </Main>
    );
};

export default OurWork;