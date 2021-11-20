import React from "react";
import styled from "styled-components";
import '../../fonts/stylesheet.css';

const BgQuick = styled.section`
  background: #11749e;
  padding: 100px 0 150px 0;

  @media (max-width: 991px){
    padding: 70px 0 100px 0;
  }
  @media (max-width: 767px){
    padding: 50px 0;
  }
`

const QuickArea = styled.div`
  display: flex;

  @media (max-width: 500px){
    flex-wrap: wrap;
  }
`

const QuickItem = styled.div`
  display: flex;
  height: 100px;
  overflow: hidden;
  
  p{
    color: #fff;
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
  }
  img{
    height: fit-content;
    margin-right: 30px;
  };
  
  :last-child{
    margin-left: 50px;
  }

  @media (max-width: 991px){
    img{
      transform: scale(70%) translate(40px, 15px);
    }
  }
  @media (max-width: 767px){
    height: 95px;
    
    p{
      font-size: 13px;
      line-height: 16px;
    }
    img{
      transform: scale(60%) translate(0, 15px);
      margin-right: 0;
    }
    
    :last-child{
      margin-left: 20px;
    }
  }
  @media (max-width: 500px){
    height: 80px;
    
    p{
      font-size: 16px;
    }
    img{
      transform: scale(60%) translate(0, 5px);
    }
    :last-child{
      margin-left: 0;
      margin-top: 30px;
    }
  }
  @media (max-width: 350px){
    p{
      font-size: 15px;
    }
  }
`

const Quick = () => {
    return(
        <BgQuick>
            <div className='container'>
                <QuickArea>
                    <QuickItem>
                        <img src='./img/WriteQuick.png' alt='Quick' />
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                        </p>
                    </QuickItem>
                    <QuickItem>
                        <img src='./img/WriteQuick.png' alt='Quick' />
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
                            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                        </p>
                    </QuickItem>
                </QuickArea>
            </div>
        </BgQuick>
    );
}

export default Quick;