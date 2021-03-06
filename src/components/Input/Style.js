import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F7F7F7;

  input:focus {
      border: 1px solid lightgreen;
  }

  input{
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
    
  }
`; 
