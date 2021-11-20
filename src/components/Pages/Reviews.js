import React from 'react';
import styled from "styled-components";
import $ from "jquery";


let comments = [];

const Main = styled.div`
  padding-top: 109px;
  background-color: #222;
  min-height: 100%;
`

const RevHead = styled.h2`
  text-align: center;
  margin-top: 30px;
  font-size: 30px;
  font-family: 'Gotham';
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
`

const RevDesc = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 22px;
  font-family: 'Gotham';
  font-weight: normal;
  text-transform: uppercase;
  color: #fff;
`

const RevComments = styled.div`
  padding-bottom: 30px;
  color: #fff;
  
  .review{
    width: 80%;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid #777;
    border-radius: 10px;
  }
  .review:last-child{
    margin: 0 auto;
  }
  .reviewTop{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .rating-mini {
    display: inline-block;
    font-size: 0;
    margin-left: 10px;
  }

  .rating-mini span {
    padding: 0;
    font-size: 20px;
    line-height: 1;
    color: lightgrey;
  }

  .rating-mini > span:before {
    content: '★';
  }

  .rating-mini > span.active {
    color: gold;
  }

  @media (max-width: 991px){
    .review{
      width: 100%;
    }
  }
`

const RevForm = styled.form`
  text-align: center;
  margin-bottom: 50px;
`

const FormName = styled.div`
  input{
    width: 50%;
    font-family: 'Gotham';
    font-weight: normal;
    font-size: 15px;
    padding: 10px 15px;
    border: 1px solid #fff;
    background: rgba(0,0,0,0);
    color: #fff;
  }

  input:focus{
    outline: none;
  }

  input::placeholder{
    color: #fff;
  }
  
  @media (max-width: 991px){
    input{
      width: 80%;
    }
  }
  
  @media (max-width: 767px){
    input{
      width: 100%;
    }
  }
`

const FormComment = styled.div`
  margin: 15px 0;
  
  textarea{
    width: 50%;
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
    textarea{
      width: 80%;
    }
  }
  @media (max-width: 767px){
    textarea{
      width: 100%;
    }
  }
`

const FormBtn = styled.div`
  button {
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    background: #11749e;
    border: none;
    padding: 12px 40px;
    cursor: pointer;
  }

  button:focus {
    background: #1999d0;
    -webkit-box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.2);
  }
`

const FormRating = styled.div`
  overflow: hidden;
  width: 210px;
  margin: 0 auto 20px auto;
  
  :not(:checked) > input {
    display: none;
  }

  :not(:checked) > label {
    float: right;
    width: 42px;
    padding: 0;
    cursor: pointer;
    font-size: 32px;
    line-height: 32px;
    color: lightgrey;
    text-shadow: 1px 1px #bbb;
  }

  :not(:checked) > label:before {
    content: '★';
  }

  > input:checked ~ label {
    color: gold;
    text-shadow: 1px 1px #c60;
  }

  :not(:checked) > label:hover,
  :not(:checked) > label:hover ~ label {
    color: gold;
  }

  > input:checked + label:hover,
  > input:checked + label:hover ~ label,
  > input:checked ~ label:hover,
  > input:checked ~ label:hover ~ label,
  > label:hover ~ input:checked ~ label {
    color: gold;
    text-shadow: 1px 1px goldenrod;
  }

  > label:active {
    position: relative;
  }
`

const Show = (out) => {
    $('#comment-field').html(out);
}

const ShowComments = () => {
    let out = '';
    comments.forEach(function(item){
        out += `<div class="review"><div class="reviewTop">`;
        out += `<span class="name">${item.name}<div class="rating-mini">`;
        for (let i = item.rating;i > 0; i--){
            out += `<span class="active"></span>`;
        }
        for (let i = 5 - item.rating;i > 0; i--){
            out += `<span></span>`;
        }
        out += `</div></span>`;
        out += `<span class="time"><i>${TimeConverter(item.time)}</i></span></div>`;
        out += `<p class="body">${item.body}</p>`;
        out += `</div>`;
    });
    setTimeout(function (){Show(out)}, 1);
}

const SaveComments = () => {
    localStorage.setItem('comments', JSON.stringify(comments));
}

const LoadComments = () => {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    ShowComments();
}

const TimeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}

const Comments = (event) => {
    event.preventDefault();

    let comment = {
        name: $('#comment-name').val(),
        body: $('#comment-body').val(),
        rating: $('input[name=rating]:checked').val(),
        time : Date.now() / 1000
    }

    $('#comment-name').val('');
    $('#comment-body').val('');
    $('input[name=rating]:checked').prop('checked', false);

    comments.push(comment);
    SaveComments();
    ShowComments();
}

const Reviews = () => {
    $('.active').removeClass('active');
    $('#reviews').addClass('active');
    LoadComments();

    return (
        <Main>
            <div className={'container'}>
                <RevHead>Customer Reviews</RevHead>
                <RevDesc>Leave your review</RevDesc>
                <RevForm onSubmit={Comments}>
                    <FormName>
                        <input type={"text"} id={"comment-name"} placeholder={"Enter your name"} minLength={2} maxLength={30} required />
                    </FormName>
                    <FormComment>
                        <textarea type={"text"} id={"comment-body"} placeholder={"Comment"} minLength={20} required />
                    </FormComment>
                    <FormRating>
                        <input type={"radio"} id={"star-5"} name={"rating"} value={"5"} />
                        <label htmlFor={"star-5"} title={"«5»"} />
                        <input type={"radio"} id={"star-4"} name={"rating"} value={"4"} />
                        <label htmlFor={"star-4"} title={"«4»"} />
                        <input type={"radio"} id={"star-3"} name={"rating"} value={"3"} />
                        <label htmlFor={"star-3"} title={"«3»"} />
                        <input type={"radio"} id={"star-2"} name={"rating"} value={"2"} />
                        <label htmlFor={"star-2"} title={"«2»"} />
                        <input type={"radio"} id={"star-1"} name={"rating"} value={"1"} />
                        <label htmlFor={"star-1"} title={"«1»"} />
                    </FormRating>
                    <FormBtn>
                        <button type={"submit"} id={"comment-add"}>Add a review</button>
                    </FormBtn>
                </RevForm>
                <RevComments id={"comment-field"} />
            </div>
        </Main>
    );
};

export default Reviews;