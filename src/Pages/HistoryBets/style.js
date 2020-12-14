import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Main = styled.div`
  max-width: 1280px;
  padding: 5rem;
  margin: 0 auto;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Animation = styled.div`
  animation: ${appearFromLeft} 1s;
`;


export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 4rem;
  
  h2 {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 25px;
    font-weight: bold;
    color: #666;
    margin-right: 10rem;
  }

  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin-left: -12rem;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 15px;
    color: #666;


    p {
      margin-right: 1rem
    }

    .btn-lotofacil,
    .btn-megasena,
    .btn-quina {
      background: none;
      border-radius: 20px;
      width: 8rem;
      height: 2.2rem;
      margin-right: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      font-style: italic;
      font-size: 15px;
      font-weight: bold;
    }
    .btn-lotofacil-active,
    .btn-megasena-active,
    .btn-quina-active {
      background: none;
      border-radius: 20px;
      width: 8rem;
      height: 2.2rem;
      margin-right: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      font-style: italic;
      font-size: 15px;
      font-weight: bold;
    }

    .btn-lotofacil {
      border: none;
      border: 2.5px solid purple;
      color: purple;
      transition: 0.5s;

      &:hover {
        background: ${shade(0.3, 'purple')};
        color: #fff;
      }

    }
    
    .btn-lotofacil-active {
      background: purple;
      color: #fff;
      border: none;
      border: 2.5px solid purple;
      transition: 0.5s;

      &:hover {
        background: ${shade(0.2, 'purple')};
        color: #fff;
      }
    }

    .btn-megasena {
      border: none;
      border: 2.5px solid green;
      background: transparent;
      color: green;
      transition: 0.5s;

      &:hover {
        background: ${shade(0.2, 'green')};
        color: #fff;
      }
    }

    .btn-megasena-active {
      background: green;
      color: #fff;
      border: none;
      border: 2.5px solid green;
      transition: 0.5s;

      &:hover {
        background: ${shade(0.2, 'green')};
        color: #fff;
      }
    }

    .btn-quina {
      border: none;
      border: 2.5px solid orange;
      color: orange;
      transition: 0.5s;

      &:hover {
        background: ${shade(0.2, 'orange')};
        color: #fff;
      }
    }

    .btn-quina-active {
      background: orange;
      color: #fff;
      border: none;
      border: 2.5px solid orange;
      transition: 0.5s;

      &:hover {
        background: ${shade(0.2, 'orange')};
        color: #fff;
      }
    }

  }

  .NavLink-New-Bet {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 30px;
    font-weight: bold;
    color: #C3CF32;
    
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover  {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

`;

export const Games = styled.div`
  width: 27rem;
  /* background: #ccc; */
  margin: 2rem 0;

  .message-empty-bets {

    margin: 0 auto;
    /* text-align: center; */

    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 15px;
    color: #666;
  }

  .div-lotofacil {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .column-lotofacil {
      width: 0.3rem;
      height: 6rem;
      border-radius: 10px;
      background: purple;
    }

    .div-rows-lotofacil {
      p {
        margin: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 15px;
        color: #666;
      }

      strong {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 18px;
        font-weight: bold;
        color: #666;
      }

      .strong-lotofacil {
        color: purple;
      }
    }
  }


  .div-mega-sena {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .column-mega-sena {
      width: 0.3rem;
      height: 6rem;
      border-radius: 10px;
      background: green;
    }

    .div-rows-mega-sena {
      p {
        margin: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 15px;
        color: #666;
      }

      strong {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 18px;
        font-weight: bold;
        color: #666;
      }

      .strong-mega-sena {
        color: green;
      }
    }
  }

  .div-quina {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .column-quina {
      width: 0.3rem;
      height: 8rem;
      border-radius: 10px;
      background: orange;
    }

    .div-rows-quina {
      p {
        margin: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 15px;
        color: #666;
      }

      strong {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 18px;
        font-weight: bold;
        color: #666;
      }

      .strong-quina {
        color: orange;
      }
    }
  }
`;