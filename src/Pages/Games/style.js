import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.00fr 0.50fr;
    background: #eee;
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

    .btn-lotofacil {
        border: none;
        border: 2.5px solid purple;
        color: purple;
        }

    .btn-mega-sena {
        border: none;
        border: 2.5px solid green;
        background: green;
        color: #fff;
    }

    .btn-lotomania {
        border: none;
        border: 2.5px solid orange;
        color: orange;
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
    }

    .btn-clear-game {
        margin-left: -10rem;
        width: 7.0rem;
        height: 2.4rem;
        color: green;
    }

    .btn-add-to-cart {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: green;
        width: 12rem;
        height: 3rem;
        color: white;
        font-size: 18px;
    }
`;

export const Cart = styled.div`

    .div-box-bets {
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
        flex-direction: column;

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

        .fillet_lotomania {
            width: 0.9rem;
            height: 100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            background: orange;
            margin-right: 7px;
        }

        .div-numbers-game_lotomania {
            p {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 12px;
                color: #666;
                font-style: italic;
                margin-bottom: 8px;

                .name-game {
                    color: orange
                }

                .name-game-lotomania {
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


