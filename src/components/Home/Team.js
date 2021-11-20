import React from "react";
import styled from "styled-components";

const BgTeam = styled.section`
  text-align: center;
  background: #fff;
  position: relative;
  padding: 100px 0 50px 0;
  
  @media (max-width: 991px){
    padding: 50px 0 0 0;
  }
`

const Heading = styled.h2`
  text-transform: uppercase;
  font-family: 'Gotham';
  font-weight: 500;
  font-size: 38px;
  color: #000;
  margin: 50px 0 150px 0;

  @media (max-width: 991px){
    font-size: 30px;
    margin: 40px 0 80px 0;
  }
`

const BlogText = styled.h3`
  font-family: 'Gotham';
  font-size: 30px;
  color: #000;
  font-weight: normal;
  margin-bottom: 50px;

  @media (max-width: 991px){
    font-size: 25px;
  }
  @media (max-width: 400px){
    font-size: 22px;
  }
  @media (max-width: 350px){
    font-size: 20px;
  }
`

const T = styled.span`
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
`

const TeamArea = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px){
    flex-wrap: wrap;
  }
`

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;

  @media (max-width: 991px){
    width: 24%;
  }
  @media (max-width: 767px){
    width: 47%;
  }
  @media (max-width: 500px){
    width: 80%;
    margin: 0 auto;
  }
`

const TeamItemInfo = styled.div`
  width: 220px;
  height: 100px;
  background: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  top: -45px;
  
  h3{
    color: #11749e;
    margin-bottom: 5px;
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 20px;
  }
  span {
    color: #000;
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 15px;
  }
  
  @media (max-width: 1200px){
    width: 185px;
  }
  @media (max-width: 991px){
    width: 140px;
    padding: 15px 0;
    
    h3{
      font-size: 17px;
      margin-bottom: 0;
    }
    span{
      font-size: 13px;
    }
  }
  @media (max-width: 767px){
    width: 200px;
    
    h3{
      font-size: 20px;
    }
    span{
      font-size: 15px;
    }
  }
  @media (max-width: 575px){
    width: 180px;
  }
  @media (max-width: 500px){
    width: 220px;
    
    h3{
      font-size: 24px;
    }
    span{
      font-size: 20px;
    }
  }
  @media (max-width: 400px){
    width: 180px;
    height: auto;
    
    h3{
      font-size: 20px;
    }
    span{
      font-size: 16px;
    }
  }
`

const Team = () => {
    return(
        <BgTeam>
            <div className='container'>
                <Heading>Our team</Heading>
                <T>T</T>
                <BlogText>sales long tail influencer pitch release niche market.</BlogText>
                <TeamArea>
                    <TeamItem>
                        <img src='./img/team1.png' alt='team' />
                        <TeamItemInfo>
                            <h3>JOHN SNOW</h3>
                            <span>CEO</span>
                        </TeamItemInfo>
                    </TeamItem>
                    <TeamItem>
                        <img src='./img/team2.png' alt='team' />
                        <TeamItemInfo>
                            <h3>LADY SANSA</h3>
                            <span>WebDesigner</span>
                        </TeamItemInfo>
                    </TeamItem>
                    <TeamItem>
                        <img src='./img/team3.png' alt='team' />
                        <TeamItemInfo>
                            <h3>DAVID SMITH</h3>
                            <span>Photographer</span>
                        </TeamItemInfo>
                    </TeamItem>
                    <TeamItem>
                        <img src='./img/team4.png' alt='team' />
                        <TeamItemInfo>
                            <h3>LADY SANSA</h3>
                            <span>Photographer</span>
                        </TeamItemInfo>
                    </TeamItem>
                </TeamArea>
            </div>
        </BgTeam>
    );
}

export default Team;