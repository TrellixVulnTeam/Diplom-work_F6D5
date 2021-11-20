import React from "react";
import styled from "styled-components";

const BgKeyFeature = styled.section`
  padding: 100px 0;
  background-image: url("./img/KeyFeature.png");
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 400px){
    padding: 70px 0;
  }
`

const KeyFeatureContent = styled.div`
  display: flex;
  
  img{
    margin: 0 auto;
  }

  @media (max-width: 991px){
    img{
      width: 50%;
    }
  }
  @media (max-width: 575px){
    img{
      display: none;
    }
  }
`

const KeyFeatureTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding-right: 10%;
  color: #fff;
  
  h2{
    margin-bottom: 30px;
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 25px;
    text-transform: uppercase;
  }
  p{
    margin-bottom: 50px;
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    height: 100px;
    overflow: hidden;
  }

  @media (max-width: 767px){
    padding-right: 0;
    
    h2{
      margin-bottom: 15px;
    }
    p{
      margin-bottom: 30px;
      line-height: 20px;
    }
  }
  @media (max-width: 575px){
    width: 100%;
    margin: 0 50px;
  }
  @media (max-width: 500px){
    margin: 0 20px;
  }
  @media (max-width: 350px){
    margin: 0;
  }
`

const TextAreaItem = styled.div`
  background: #11749e;
  margin: 10px 0;
  padding: 7px 14px;
  color: #fff;
  
  :nth-child(3){
    width: 60%;
  }
  :nth-child(4){
    width: 70%;
  }
  :nth-child(5){
    width: 80%;
  }

  @media (max-width: 991px){
    :nth-child(3){
      width: 80%;
    }
    :nth-child(4){
      width: 90%;
    }
    :nth-child(5){
      width: 100%;
    }
  }
`

const KeyFeature = () => {
    return(
        <BgKeyFeature>
            <div className='container'>
                <KeyFeatureContent>
                    <KeyFeatureTextArea>
                        <h2>Akita Inu Dog</h2>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed posuere consectetur est at lobortis.
                        </p>
                        <TextAreaItem>Fully Responsive Design</TextAreaItem>
                        <TextAreaItem>High Quality Code</TextAreaItem>
                        <TextAreaItem>Different Headers & Layout</TextAreaItem>
                    </KeyFeatureTextArea>
                    <img src='./img/KFimg.png' alt='KeyFeature' />
                </KeyFeatureContent>
            </div>
        </BgKeyFeature>
    );
}

export default KeyFeature;