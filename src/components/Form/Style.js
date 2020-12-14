import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: #F7F7F7;
  width: 100%;
  height: 100%;


  .span-message-error {
    width: 100%;

    background: rgba(255, 0, 0 , 0.1);
    border-radius: 5px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: red;
    text-align: center;
    padding: 15px;
  }

  .span-message-send {
    width: 100%;

    background: rgba(127, 255, 0 , 0.2);
    border-radius: 5px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: green;
    text-align: center;
    padding: 15px;
  }

  form {
    width: 50%;
    /* height: 18rem; */
    background: #fff;
    box-shadow: 5px 5px 5px #ddd;
    border-radius: 10px;
    margin: 25px 0px;

    .input-no-radius {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

  input {
    margin-top: 0;
    width: 100%;
    height: 65px;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 13px;
    font-weight: bold;
    opacity: 0.8;
    border: none;
    border-bottom: 1px solid #ddd;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }


  .div-link-forget {
    width: 100%;
    padding: 15px;
    

    .link-forget {
      margin-left: 50%;
      text-decoration: none;
      font-family: Arial, Helvetica, sans-serif;
      font-style: italic;
      font-size: 14px;
      color: #bbb;
    }
  }

  .div-link-login {
      height: 6.9rem;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      .link-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 30px;
        font-weight: bold;
        color: #C3CF32;
        background: none;
        border: none;
      }

    }
  }

  .link-2 {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 30px;
    font-weight: bold;
    color: #666;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`; 

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: 30px;
  font-weight: bold;
  color: #666;
`; 
