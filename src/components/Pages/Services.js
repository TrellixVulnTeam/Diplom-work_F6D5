import React from 'react';
import styled from "styled-components";
import $ from "jquery";

const Main = styled.section`
  background: #222;
  padding-top: 109px;

  span{
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 13px;
  }
  h2{
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 25px;
    text-transform: uppercase;
    margin: 15px 0 10px 0;
  }
  p{
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    margin-top: 20px;
  }

  @media (max-width: 991px){
    h2{
      margin: 10px 0 5px 0;
    }
  }
  @media (max-width: 767px){
    span{
      font-size: 12px;
    }
    h2{
      font-size: 22px;
    }
    p{
      font-size: 14px;
      line-height: 20px;
    }
  }
`

const SvImage = styled.div`
  :nth-child(even) {
    position: absolute;
    left: 50%;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 50%;
  }
  :nth-child(odd) {
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 50%;
  }

  @media (max-width: 500px){
    left: 0 !important;
    width: 100% !important;
    opacity: 0.3;
    z-index: 1;  
  }
`

const SvContainer = styled.div`
  position: relative;
  
  :nth-child(odd){
    background: #222;
  }
  :nth-child(even){
    background: #f3f3f3;
  }
`

const SvText = styled.div`
  height: 200px;
  overflow: hidden;
`

const SvTopContent = styled.div`
  width: 50%;
  padding: 80px 100px 120px 0;
  color: #fff;

  @media (max-width: 991px){
    padding: 40px 70px 70px 0;
  }
  @media (max-width: 767px){
    padding: 30px 30px 30px 0;
  }
  @media (max-width: 500px){
    position: relative;
    z-index: 2;
    width: 100%;
    text-shadow: 0 0 1px rgba(255, 255, 255, 1);
    padding: 30px;
  }
`

const SvDownContent = styled.div`
  width: 50%;
  padding: 80px 0 120px 100px;
  color: #222;
  margin-left: 50%;

  @media (max-width: 991px){
    padding: 40px 0 70px 70px;
  }
  @media (max-width: 767px){
    padding: 30px 0 30px 30px;
  }
  @media (max-width: 500px){
    position: relative;
    z-index: 2;
    width: 100%;
    text-shadow: 0 0 0px rgba(0, 0, 0, 1);
    margin-left: 0;
    padding: 30px;
  }
`

const Services = () => {
    $('.active').removeClass('active');
    $('#services').addClass('active');
    return (
        <Main>
            <SvContainer>
                <div className={'container'}>
                    <SvTopContent>
                        <h2>Website development</h2>
                        <SvText>
                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed posuere consectetur
                            </p>
                        </SvText>
                    </SvTopContent>
                </div>
                <SvImage style={{ backgroundImage: 'url("./img/NewsTop.png")' }} />
            </SvContainer>
            <SvContainer>
                <SvImage style={{ backgroundImage: 'url("./img/NewsDown.png")' }} />
                <div className={'container'}>
                    <SvDownContent>
                        <h2>SMM Promotion</h2>
                        <SvText>
                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed posuere consectetur
                            </p>
                        </SvText>
                    </SvDownContent>
                </div>
            </SvContainer>
            <SvContainer>
                <div className={'container'}>
                    <SvTopContent>
                        <h2>contextual advertising</h2>
                        <SvText>
                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed posuere consectetur
                            </p>
                        </SvText>
                    </SvTopContent>
                </div>
                <SvImage style={{ backgroundImage: 'url("./img/bgheader.png")' }}/>
            </SvContainer>
            <SvContainer>
                <SvImage style={{ backgroundImage: 'url("./img/KeyFeature.png")' }}/>
                <div className={'container'}>
                    <SvDownContent>
                        <h2>Implementation of crm systems</h2>
                        <SvText>
                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed posuere consectetur
                            </p>
                        </SvText>
                    </SvDownContent>
                </div>
            </SvContainer>
        </Main>
    );
};

export default Services;