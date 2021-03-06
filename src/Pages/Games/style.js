import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.00fr 0.50fr;
    background: #F7F7F7;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Animation = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const Main = styled.div`
    padding: 3rem 5.5rem;
`;

export const Title = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 25px;
    color: #666;
`;

export const ChooseGame = styled.div`
    margin-top: 2rem;

    button {
        background: none;
        border-radius: 20px;
        width: 8rem;
        height: 2.2rem;
        margin-right: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 15px;
        font-weight: bold;
        margin-top: 1rem
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
      border: 2.5px solid ${props => `${props.bgLotofacil}`};
      color: ${props => `${props.bgLotofacil}`};
      transition: 0.5s;

      &:hover {
        background: ${shade(0.1, '#7F3992')};
        border-color: ${shade(0.1, '#7F3992')};
        color: #fff;
      }

    }
    
    .btn-lotofacil-active {
      background: ${props => `${props.bgLotofacil}`};
      color: #fff;
      border: none;
      border: 2.5px solid ${props => `${props.bgLotofacil}`};
      transition: 0.5s;

      &:hover {
        background: ${shade(0.1, '#7F3992')};
        border-color: ${shade(0.1, '#7F3992')};
        color: #fff;
      }
    }

    .btn-megasena {
      border: none;
      border: 2.5px solid ${props => `${props.bgMegasena}`};
      background: transparent;
      color: ${props => `${props.bgMegasena}`};
      transition: 0.5s;

      &:hover {
        background: ${shade(0.1, '#01AC66')};
        border-color: ${shade(0.1, '#01AC66')};
        color: #fff;
      }
    }

    .btn-megasena-active {
      background: ${props => `${props.bgMegasena}`};
      color: #fff;
      border: none;
      border: 2.5px solid ${props => `${props.bgMegasena}`};
      transition: 0.5s;

      &:hover {
        background: ${shade(0.1, '#01AC66')};
        border-color: ${shade(0.1, '#01AC66')};
        color: #fff;
      }
    }

    .btn-quina {
      border: none;
      border: 2.5px solid ${props => `${props.bgQuina}`};
      color: ${props => `${props.bgQuina}`};
      transition: 0.5s;

      &:hover {
        background: ${shade(0.1, '#F79C31')};
        border-color: ${shade(0.1, '#F79C31')};
        color: #fff;
      }
    }

    .btn-quina-active {
      background: ${props => `${props.bgQuina}`};
      color: #fff;
      border: none;
      border: 2.5px solid ${props => `${props.bgQuina}`};
      transition: 0.5s;

      &:hover {
        background: ${shade(0.1, '#F79C31')};
        border-color: ${shade(0.1, '#F79C31')};
        color: #fff;
      }
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 15px;
        color: #666;
        font-weight: bold;
    }
`;


export const Description = styled.div`
    margin-top: 1.5rem;

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 15px;
        color: #666;
    }

`;
export const ButtonsVolant = styled.div`
    margin-top: 1rem;
    button {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 50%;
    background: gray;
    color: #fff;
    margin: 0.3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    font-weight: bold;
  }
`;

export const DivActionButtons = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: transparent;
        border-radius: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: bold;        
        border: none;
        border: 1px solid green;
    }

    .btn-complete-game {
        width: 7.7rem;
        height: 2.4rem;
        color: green;
        transition: 1s;

        &:hover {
            background: ${shade(0.2, 'green')};
            color: #fff;
        }
    }

    .btn-clear-game {
        margin-left: -10rem;
        width: 7.0rem;
        height: 2.4rem;
        color: green;
        transition: 1s;

        &:hover {
            background: ${shade(0.2, 'green')};
            color: #fff;
        }
    }

    .btn-add-to-cart {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: green;
        width: 14rem;
        height: 3rem;
        color: white;
        font-size: 15px;
        transition: 1s;

        &:hover {
            background: ${shade(0.6, 'green')}
        }
    }
`;

export const Cart = styled.div`

    .icon-trash {
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

    .div-box-bets {
        position: relative;
        height: 20rem;
        overflow: auto;
        padding: 2rem 1rem;
        margin-top: 2.5rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        width: 85%;
        height: 21rem;

        border: 1px solid #ccc;
        background: #fff;
        display: flex;
       /*  align-items: center;
        justify-content: center; */
        flex-direction: column;

        .empty-cart {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            color: rgba(0,0,0, 0.3);
            font-style: italic;
            position: absolute;
            margin-top: 35%;
            margin-left: 30%;
        }

        .div-box-bet {
            display: flex;
            align-items: center;
            margin-top: 1rem;
            height: 5rem;
            width: 100%;

        .icon-trash {
            margin: 0 8px;
            cursor: pointer;
        }

        .fillet {
            width: 0.4rem;
            height: 80%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            background: purple;
            margin-right: 7px;
        }

        .fillet_megasena {
            width: 0.4rem;
            height: 80%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            background: green;
            margin-right: 7px;
        }

        .fillet_quina {
            width: 0.4rem;
            height: 80%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            background: orange;
            margin-right: 7px;
        }

        .div-numbers-game_quina {
            p {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 12px;
                color: #666;
                font-style: italic;
                margin-bottom: 8px;

                .name-game {
                    color: orange
                }

                .name-game-quina {
                    color: orange
                }
        }
        }

        .div-numbers-game {
            p {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 13px;
                color: #666;
                font-style: italic;
                margin-bottom: 8px;

                .name-game {
                    color: purple
                }

                .name-game-megasena {
                    color: green
                }
            }

        }

    }


        h2 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            color: #666;
            font-style: italic;
        }

        .div-only-bets {
            width: 100%;
            height: 80%;
            overflow: auto;
        }

        .div-cart-total {

            p {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                color: #666;
            }
            
            strong {
                font-style: italic;
            }
            
        }

    }

    .div-btn-save {
        .style-btn-save-active {
            animation: pulse 0.2s;
            animation-direction: alternate;
            -webkit-animation-name: pulse;
            animation-name: pulse;
        }

        @-webkit-keyframes pulse {
            0% {
                -webkit-transform: scale(1);
                -webkit-filter: brightness(100%);
            }
            100% {
                -webkit-transform: scale(1.1);
                -webkit-filter: brightness(200%);
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                filter: brightness(100%);
            }

            100% {
                transform: scale(1.1);
                filter: brightness(200%);
            }
        }

        .nav-link-save-games {
            text-decoration: none;
        }

        button {
            width: 85%;
            height: 6rem;
            border-top: none;
            border: 1px solid #ccc;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            background: #ddd;
            color: green;

            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            font-weight: bold;
            font-style: italic;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    

`;


