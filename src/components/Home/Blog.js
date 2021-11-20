import React from "react";
import styled from "styled-components";
import '../../fonts/stylesheet.css';

const BgBlog = styled.section`
  background: #fff;
  position: relative;
  padding: 100px 0;
  text-align: center;

  @media (max-width: 991px){
    padding: 70px 0;
  }
  @media (max-width: 767px){
    padding: 40px 0 0 0;
  }
`

const Heading = styled.h2`
  text-transform: uppercase;
  font-family: 'Gotham';
  font-weight: 500;
  font-size: 38px;
  color: #000;
  margin: 50px 0 100px 0;

  @media (max-width: 991px){
    font-size: 30px;
    margin: 30px 0 70px 0;
  }
`

const BlogText = styled.h3`
  font-family: 'Gotham';
  font-size: 30px;
  color: #000;
  font-weight: normal;
  margin-bottom: 50px;

  @media (max-width: 991px){
    font-size: 24px;
    margin-bottom: 20px;
  }
  @media (max-width: 767px){
    font-size: 20px;
    margin-bottom: 0;
  }
`

const B = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'robotobold';
  font-size: 250px;
  color: #000;
  opacity: 0.18;

  @media (max-width: 991px){
    font-size: 170px;
  }
  @media (max-width: 767px){
    top: -30px;
  }
`

const BlogArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 30px;

  @media (max-width: 767px){
    flex-wrap: wrap;
  }
`

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  
  
  h3{
    text-transform: uppercase;
    color: #11749e;
    font-size: 16px;
    font-family: 'Gotham';
    font-weight: 500;
    margin: 30px 0 15px 0;
  }
  span{
    color: #222;
    font-size: 15px;
    font-family: 'Gotham';
    font-weight: normal;
    height: 140px;
    overflow: hidden;
    line-height: 20px;
  }

  @media (max-width: 991px){
    margin: 0 10px;
    
    span{
      font-size: 13px;
    }
  }
  @media (max-width: 767px){
    width: 45%;
    
    h3{
      margin: 20px 0 10px 0;
    }
    span{
      margin-bottom: 40px;
    }
  }
  @media (max-width: 500px){
    width: 80%;
    
    h3{
      font-size: 20px;
    }
    span{
      font-size: 15px;
    }
  }
`

const Blog = () => {
    return(
        <BgBlog>
            <div className='container'>
                <Heading>Let's blog</Heading>
                <B>B</B>
                <BlogText>We love clean design and advanced digital solutions.</BlogText>
                <BlogArea>
                    <BlogItem>
                        <img src='./img/Blog1.png' alt='Blog' />
                        <h3>Fresh Summer Campaign</h3>
                        <span>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                        </span>
                    </BlogItem>
                    <BlogItem>
                        <img src='./img/Blog2.png' alt='Blog' />
                        <h3>Fresh Summer Campaign</h3>
                        <span>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                        </span>
                    </BlogItem>
                    <BlogItem>
                        <img src='./img/Blog3.png' alt='Blog' />
                        <h3>Fresh Summer Campaign</h3>
                        <span>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                        </span>
                    </BlogItem>
                    <BlogItem>
                        <img src='./img/Blog1.png' alt='Blog' />
                        <h3>Fresh Summer Campaign</h3>
                        <span>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                        </span>
                    </BlogItem>
                </BlogArea>
            </div>
        </BgBlog>
    );
}

export default Blog;