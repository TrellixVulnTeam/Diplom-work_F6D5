import React from 'react';
import styled from "styled-components";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Main = styled.div`
  text-align: center;
  background-image: url("./img/Contact.png");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  padding-top: 159px;
`

const ContactData = styled.div`
  display: flex;
  
  input{
    width: 100%;
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 15px;
    padding: 15px;
    border: 1px solid #fff;
    background: rgba(0,0,0,0);
    color: #fff;
  }
  
  input:focus{
    outline: none;
  }
  
  input:nth-child(2){
    margin: 0 25px;
  }
  
  input::placeholder{
    color: #fff;
  }

  @media (max-width: 991px){
    input{
      padding: 10px;
    }
    input:nth-child(2){
      margin: 0 20px;
    }
  }
  @media (max-width: 767px){
    input:nth-child(2){
      margin: 0 15px;
    }
  }
  @media (max-width: 575px){
    flex-wrap: wrap;
    
    input:nth-child(2){
      margin: 20px 0;
    }
  }
`

const ContactMessage = styled.div`
  margin: 40px 0 20px 0;
  
  textarea{
    width: 100%;
    height: 150px;
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 15px;
    padding: 15px;
    border: 1px solid #fff;
    background: rgba(0,0,0,0);
    color: #fff;
    resize: none;
  }
  
  textarea::placeholder{
    color: #fff;
  }
  
  textarea:focus{
    outline: none;
  }

  @media (max-width: 991px){
    margin: 30px 0 40px 0;
  }
  @media (max-width: 767px){
    margin: 20px 0 30px 0;
  }
`

const ContactButton = styled.div`
  margin-bottom: 100px;

  div{
    color: red;
    height: 20px;
    margin-bottom: 20px;
    font-family: 'Gotham';
    font-weight: normal;
  }

  button {
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    background: #11749e;
    border: none;
    padding: 15px 60px;
    cursor: pointer;
  }

  button:active {
    background: #1999d0;
    -webkit-box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 767px){
    margin-bottom: 50px;
    
    button{
      font-size: 20px;
      padding: 12px 50px;
    }
  }
`

const Map = styled.div`
  position: relative;
  overflow: hidden;
  
  iframe{
    position: relative;
    width: 100%;
    height: 330px;
    border: none;
    -webkit-filter: grayscale(1);
    -moz-filter: grayscale(1);
    -o-filter: grayscale(1);
    filter: grayscale(1);
  }
`

const Questions = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto 100px auto;
  height: 160px;
  transition: 0.5s ease-out;

  @media (max-width: 767px){
    width: 100%;
    margin: 0 0 100px 0;
  }
`

const QtItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 10px;
`

const QtHead = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  
  svg{
    font-size: 30px;
    transition: 0.3s ease-out;
  }
  svg:hover{
    color: #aaa;
  }
`

const QtHeading = styled.h2`
  font-family: 'Gotham';
  font-weight: 500;
  margin-right: 10px;

  @media (max-width: 575px){
    font-size: 20px;
  }
`

const QtText = styled.div`
  font-family: 'Gotham';
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  height: 0;
  overflow: hidden;
  transition: 0.5s ease-out;
  margin: 0;

  @media (max-width: 575px){
    font-size: 14px;
  }
`

let qtCheck = false;
const Qt = (id, height) => {
    if (qtCheck === false || qtCheck !== id){
        $('.qt').css('height', '0');
        $('.qt').css('margin', '0');
        $('.fa').css('transform', 'rotate(0)');
        $(`#qt${id}`).css('height', `${height}`);
        $(`#qt${id}`).css('margin', '20px 0');
        $(`#fa${id}`).css('transform', 'rotate(-180deg)');
        $('#questions').css('height', '280px');
        qtCheck = id;
    } else {
        $(`#qt${id}`).css('height', '0');
        $(`#qt${id}`).css('margin', '0');
        $(`#fa${id}`).css('transform', 'rotate(0)');
        $('#questions').css('height', '160px');
        qtCheck = false;
    }
}

const FormErr = (event) => {
    event.preventDefault();
    let message = $('#formErr'),
        valueName = $('#formName').val(),
        valueMail = $('#formMail').val(),
        valuePhone = $('#formPhone').val(),
        valueMessage = $('#formMessage').val();
    message.html('');

    try {
        if (valueName === "") throw "Please enter your name";
        if (/[0-9]/.test(valueName)) throw "Name cannot contain numbers";
        if (/[ ]/.test(valueName)) throw "There can be no spaces in the name";
        if (valueName.length > 15) throw "Your name is too long";
        if (valueName.length < 2) throw "Your name is too short";
        if (valueMail === "") throw "Please enter your email";
        if (valueMail.length > 60) throw "Your email is too long";
        if (!valueMail.includes('@')
            || !valueMail.includes('.')
            || valueMail.length < 6) throw "Invalid email";
        if (isNaN(valuePhone)) throw "The number cannot contain letters";
        if (valuePhone === "") throw "Please enter your phone number";
        if (valuePhone[0] !== '+') throw "Please enter your phone number in the format +380123456789";
        if (valuePhone.length > 13) throw "Too many numbers for the phone";
        if (valuePhone.length < 13) throw "Too few digits for a phone";
        if (valueMessage === "") throw "Please enter your message";
        if (valueMessage.length < 30) throw "Your message is too short";
    } catch (err) {
        message.html(err);
    }
}

const Contacts = () => {
    $('.active').removeClass('active');
    $('#contacts').addClass('active');
    return (
        <Main>
            <div className={'container'}>
                <Questions id={'questions'}>
                    <QtItem>
                        <QtHead onClick={function (){Qt('1', '120');}}>
                            <QtHeading>How can I order a website?</QtHeading>
                            <FontAwesomeIcon icon={['fas', 'chevron-down']} id={'fa1'} className={'fa'} />
                        </QtHead>
                        <QtText id={'qt1'} className={'qt'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </QtText>
                    </QtItem>
                    <QtItem>
                        <QtHead onClick={function (){Qt('2', '40');}}>
                            <QtHeading>How to contact for consultation?</QtHeading>
                            <FontAwesomeIcon icon={['fas', 'chevron-down']} id={'fa2'} className={'fa'} />
                        </QtHead>
                        <QtText id={'qt2'} className={'qt'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </QtText>
                    </QtItem>
                    <QtItem>
                        <QtHead onClick={function (){Qt('3', '100');}}>
                            <QtHeading>What to do if the server crashes?</QtHeading>
                            <FontAwesomeIcon icon={['fas', 'chevron-down']} id={'fa3'} className={'fa'} />
                        </QtHead>
                        <QtText id={'qt3'} className={'qt'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </QtText>
                    </QtItem>
                    <QtItem>
                        <QtHead onClick={function (){Qt('4', '60');}}>
                            <QtHeading>Where to buy the most delicious donuts?</QtHeading>
                            <FontAwesomeIcon icon={['fas', 'chevron-down']} id={'fa4'} className={'fa'} />
                        </QtHead>
                        <QtText id={'qt4'} className={'qt'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </QtText>
                    </QtItem>
                </Questions>
                <form>
                    <ContactData>
                        <input id={'formName'} type={'text'} placeholder={'Name'} required />
                        <input id={'formMail'} type={'email'} placeholder={'Email'} required />
                        <input id={'formPhone'} type={'tel'} placeholder={'Phone'} required />
                    </ContactData>
                    <ContactMessage>
                        <textarea id={'formMessage'} placeholder={'Message'} required />
                    </ContactMessage>
                    <ContactButton>
                        <div id={'formErr'} />
                        <button type={'submit'} onClick={FormErr}>SUBMIT</button>
                    </ContactButton>
                </form>
            </div>
            <Map>
                <iframe src="https://yandex.by/map-widget/v1/-/CCUquHT0xC" allowFullScreen="true" />
            </Map>
        </Main>
    );
};

export default Contacts;