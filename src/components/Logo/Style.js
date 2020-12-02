import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #F7F7F7;
  width: 100%;
  height: 100%;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 60px;
    font-weight: bold;
    color: #666;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #C3CF32;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    margin: 20px;
  }

  h5 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 80px;
    font-weight: bold;
    color: #666;
  }

`; 