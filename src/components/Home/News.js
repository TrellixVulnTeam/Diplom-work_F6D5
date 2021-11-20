import React from "react";
import styled from "styled-components";

const NewsBg = styled.section`
  //background: rgb(243,243,243);
  //background: linear-gradient(0deg, rgba(243,243,243,1) 0%, rgba(243,243,243,1) 50%, rgba(34,34,34,1) 50%, rgba(34,34,34,1) 100%);
  
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

const NewsContainer = styled.div`
  position: relative;

  :nth-child(odd){
    background: #222;
  }
  :nth-child(even){
    background: #f3f3f3;
  }
`

const NewsText = styled.div`
  height: 160px;
  overflow: hidden;
`

const NewsTopContent = styled.div`
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

const NewsDownContent = styled.div`
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

const NewsTopImage = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  background-image: url("./img/NewsTop.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 50%;

  @media (max-width: 500px){
    left: 0;
    width: 100%;
    opacity: 0.3;
    z-index: 1;
  }
`

const NewsDownImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("./img/NewsDown.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 50%;

  @media (max-width: 500px){
    width: 100%;
    opacity: 0.3;
    z-index: 1;
  }
`

const News = () => {
    return(
        <NewsBg>
                <NewsContainer>
                    <div className={'container'}>
                        <NewsTopContent>
                            <span>Jan 4, 2016   |   In Culture</span>
                            <h2>Akita Inu Dog</h2>
                            <NewsText>
                                <p>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                                    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                                <p>
                                    Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed posuere consectetur
                                </p>
                            </NewsText>
                        </NewsTopContent>
                    </div>
                    <NewsTopImage />
                </NewsContainer>
                <NewsContainer>
                    <NewsDownImage />
                    <div className={'container'}>
                        <NewsDownContent>
                            <span>Jan 4, 2016   |   In Culture</span>
                            <h2>Akita Inu Dog</h2>
                            <NewsText>
                                <p>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                                    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                                <p>
                                    Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed posuere consectetur
                                </p>
                            </NewsText>
                        </NewsDownContent>
                    </div>
                </NewsContainer>
        </NewsBg>
    );
}

export default News;