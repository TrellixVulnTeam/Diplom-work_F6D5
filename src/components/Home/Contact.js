import React from "react";
import styled from "styled-components";
import $ from 'jquery';

const BgContact = styled.section`
  text-align: center;
  background-image: url("./img/Contact.png");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  padding-top: 100px;

  @media (max-width: 767px){
    padding-top: 70px;
  }
`

const Heading = styled.h2`
  text-transform: uppercase;
  font-family: 'Gotham';
  font-weight: 500;
  font-size: 38px;
  color: #fff;
  margin: 50px 0 150px 0;

  @media (max-width: 991px){
    font-size: 28px;
    margin: 0 0 100px 0;
  }
  @media (max-width: 767px){
    font-size: 25px;
    margin-bottom: 70px;
  }
  @media (max-width: 500px){
    font-size: 20px;
    margin-top: 5px;
  }
`

const C = styled.span`
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
  @media (max-width: 767px){
    top: -20px
  }
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
  padding-bottom: 40px;
  
  div{
    color: red;
    height: 20px;
    margin-bottom: 20px;
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
  button{
      font-size: 20px;
      padding: 12px 50px;
    }
  }
`

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
        if (!valueMail.includes('@') || !valueMail.includes('.') || valueMail.length < 6) throw "Invalid email";
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

const Contact = () => {
    return(
        <BgContact>
            <div className={'container'}>
                <Heading>We’d love to hear abo1ut your project.</Heading>
                <C>C</C>
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
        </BgContact>
    );
}

export default Contact;