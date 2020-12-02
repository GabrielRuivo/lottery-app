import React, {useState} from 'react';
import {useAuth} from '../../context/AuthContext'
import {AiOutlineShoppingCart, AiOutlineArrowRight} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';

import Header from '../../components/Header/index';

import {
    Container, 
    Main, 
    Title, 
    ChooseGame, 
    Description, 
    ButtonsVolant, 
    Cart, 
    DivActionButtons 
} from './style';

// isso aqui vai criar um array com booleans, todos false
const BUTTONS_LOTOFACIL = Array.from({ length: 25 }).map(() => false);
const BUTTONS_MEGASENA = Array.from({ length: 60 }).map(() => false);
const BUTTONS_LOTOMANIA = Array.from({ length: 100 }).map(() => false); 

const Games = (props) => {

    const user = useAuth();
    let userName = user.currentUser.displayName   

    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const [lotofacilActive, setLotofacilActive] = useState(false);
    const [megaSenaActive, setmegaSenaActive] = useState(false);
    const [lotomaniaActive, setlotomaniaActive] = useState(false);

    const [listLotofacil, setListLotofacil] = useState(BUTTONS_LOTOFACIL);
    const [listMegasena, setListMegasena] = useState(BUTTONS_MEGASENA);
    const [listLotomania, setListLotomania] = useState(BUTTONS_LOTOMANIA);

    const [buttonAddToCartActive, setButtonAddToCartActive] = useState(false);

    const [betsLotofacil, setBetsLotofacil] = useState([]);
    const [betsSavesLotofacil, setBetsSavesLotofacil] = useState([]);

    const [betsMegasena, setBetsMegasena] = useState([]);
    const [betsSavesMegasena, setBetsSavesMegasena] = useState([]);

    const [betsLotomania, setBetsLotomania] = useState([]);
    const [betsSavesLotomania, setBetsSavesLotomania] = useState([]);

    let newBetsSavesLotofacil = [...new Set(betsSavesLotofacil.flat(Infinity))]
    let newBetsSavesMegasena = [...new Set(betsSavesMegasena.flat(Infinity))]
    let newBetsSavesLotomania = [...new Set(betsSavesLotomania.flat(Infinity))]
    
    function activeGameSelected(game) {
        if(game === 'lotofacil') {
            setLotofacilActive(true);
            setmegaSenaActive(false)
            setlotomaniaActive(false)
        }
        
        if(game === 'megasena') {
            setLotofacilActive(false);
            setmegaSenaActive(true)
            setlotomaniaActive(false)
        }

        if(game === 'lotomania') {
            setLotofacilActive(false);
            setmegaSenaActive(false)
            setlotomaniaActive(true)
        }
    }

    function toggleButtonStateLotofacil(buttonIndex) {
        if(betsLotofacil.length < 20) {
            
            setListLotofacil((oldList) => {
                const newList = oldList.map((isBtnSelected, index) => {
                    const shouldToggleBtnState = index === buttonIndex;
                    return shouldToggleBtnState === true ? !isBtnSelected : isBtnSelected;
                });
                return newList;
            });

            let buttonsClicked = listLotofacil.reduce((buttons, isBtnSelected, index) => {
                if (isBtnSelected) {
                    return [...buttons, index + 1];
                }
                return buttons;
            }, [])

            betsLotofacil.push(buttonsClicked.sort((a,b) => a - b ))
            betsSavesLotofacil.push(buttonsClicked.sort((a,b) => a - b ))
           
            if(betsLotofacil.length >= 15) {
                setButtonAddToCartActive(true)
            }
        } 
    }

    function toggleButtonStateMegasena(buttonIndex) {
        if(betsMegasena.length < 15) {
            
            setListMegasena((oldList) => {
                const newList = oldList.map((isBtnSelected, index) => {
                    const shouldToggleBtnState = index === buttonIndex;
                    return shouldToggleBtnState === true ? !isBtnSelected : isBtnSelected;
                });
                return newList;
            });

            let buttonsClicked = listMegasena.reduce((buttons, isBtnSelected, index) => {
                if (isBtnSelected) {
                    return [...buttons, index + 1];
                }
                return buttons;
            }, [])

            betsMegasena.push(buttonsClicked.sort((a,b) => a - b ))
            betsSavesMegasena.push(buttonsClicked.sort((a,b) => a - b ))
           
            if(betsMegasena.length >= 15) {
                setButtonAddToCartActive(true)
            }
        } 
    }

    function toggleButtonStateLotomania(buttonIndex) {
        if(betsLotomania.length < 50) {
            
            setListLotomania((oldList) => {
                const newList = oldList.map((isBtnSelected, index) => {
                    const shouldToggleBtnState = index === buttonIndex;
                    return shouldToggleBtnState === true ? !isBtnSelected : isBtnSelected;
                });
                return newList;
            });

            let buttonsClicked = listLotomania.reduce((buttons, isBtnSelected, index) => {
                if (isBtnSelected) {
                    return [...buttons, index + 1];
                }
                return buttons;
            }, [])

            betsLotomania.push(buttonsClicked.sort((a,b) => a - b ))
            betsSavesLotomania.push(buttonsClicked.sort((a,b) => a - b ))
           
            if(betsLotomania.length >= 50) {
                setButtonAddToCartActive(true)
            }
        } 
    }


    function handleClearGameLotofacil() {
        betsLotofacil.splice(0);
        betsSavesLotofacil.splice(0);
        setListLotofacil(listLotofacil.map(item => {
            return item === true ? false : false;
        }))
    }

    function handleClearGameMegasena() {
        betsMegasena.splice(0);
        betsSavesMegasena.splice(0);
        setListMegasena(listMegasena.map(item => {
            return item === true ? false : false;
        }))
    }

    function handleClearGameLotomania() {
        betsLotomania.splice(0);
        betsSavesLotomania.splice(0);
        setListLotomania(listLotomania.map(item => {
            return item === true ? false : false;
        }))
    }

    function handleCompleteGameLotofacil() {
        if(betsLotofacil.length < 15) {
            let randonBets = [];
            while(randonBets.length < 15) {
                let randomBets = Math.floor(Math.random() * (25 - 1)) + 1;
                if(randonBets.indexOf(randomBets) === -1) {
                    randonBets.push(randomBets);
                }
            }

            if(randonBets.length >= 15) {
                setButtonAddToCartActive(true)
            }
    
            randonBets.map(item => { return listLotofacil[item - 1] = true } )
            setBetsLotofacil( betsLotofacil.concat(randonBets.sort((a,b) => a - b )));
            setBetsSavesLotofacil( betsSavesLotofacil.concat(randonBets.sort((a,b) => a - b )));

        } 
        else {
            alert('Jogo já está completo')
        }

    } 

    function handleCompleteGameMegasena() {
        if(betsMegasena.length < 15) {
            let randonBets = [];
            while(randonBets.length < 15) {
                let randomBets = Math.floor(Math.random() * (60 - 1)) + 1;
                if(randonBets.indexOf(randomBets) === -1) {
                    randonBets.push(randomBets);
                }
            }

            if(randonBets.length >= 15) {
                setButtonAddToCartActive(true)
            }
    
            randonBets.map(item => { return listMegasena[item - 1] = true })
            setBetsMegasena( betsMegasena.concat(randonBets.sort((a,b) => a - b )));
            setBetsSavesMegasena( betsSavesMegasena.concat(randonBets.sort((a,b) => a - b )));

        } 
        else {
            alert('Jogo já está completo')
        }
    } 

    function handleCompleteGameLotomania() {
        if(betsLotomania.length < 50) {
            let randonBets = [];
            while(randonBets.length < 50) {
                let randomBets = Math.floor(Math.random() * (100 - 1)) + 1;
                if(randonBets.indexOf(randomBets) === -1) {
                    randonBets.push(randomBets);
                }
            }

            if(randonBets.length >= 50) {
                setButtonAddToCartActive(true)
            }
    
            randonBets.map(item => { return listLotomania[item - 1] = true })
            setBetsLotomania( betsLotomania.concat(randonBets.sort((a,b) => a - b )));
            setBetsSavesLotomania( betsSavesLotomania.concat(randonBets.sort((a,b) => a - b )));

        } 
        else {
            alert('Jogo já está completo')
        }

    } 


    function handleAddtoCart() {
        dispatch({type: 'ADD_TO_CART_LOTOFACIL', payload: newBetsSavesLotofacil, show: true, price: store.price_lotofacil, date: new Date().toLocaleDateString()});
        handleClearGameLotofacil();
        setButtonAddToCartActive(false);
    }

    function handleAddtoCartMegasena() {
        dispatch({type: 'ADD_TO_CART_MEGASENA', payload_megasena: newBetsSavesMegasena, show: true, price: store.price_megasena, date: new Date().toLocaleDateString()});
        handleClearGameMegasena();
        setButtonAddToCartActive(false);
    }

    function handleAddtoCartLotomania() {
        dispatch({type: 'ADD_TO_CART_LOTOMANIA', payload_lotomania: newBetsSavesLotomania, show: true, price: store.price_lotomania, date: new Date().toLocaleDateString()});
        handleClearGameLotomania();
        setButtonAddToCartActive(false);
    }

    function handleDeleteBetLotofacil(index) {
        dispatch({type: 'DELETE_BET_LOTOFACIL_TO_CART', index: index })
    }

    function handleDeleteBetMegasena(index) {
        dispatch({type: 'DELETE_BET_MEGASENA_TO_CART', index: index })
    }

    function handleDeleteBetLotomania(index) {
        dispatch({type: 'DELETE_BET_LOTOMANIA_TO_CART', index: index })
    }

    function handleSaveBets() {
        dispatch ({
            type: 'SAVE_BETS', 
            payload_lotofacil: newBetsSavesLotofacil, 
            payload_megasena: newBetsSavesMegasena,
            payload_lotomania: newBetsSavesLotomania,
            date: new Date().toLocaleDateString(),
        })

        handleClearGameLotomania();
        handleClearGameMegasena();
        handleClearGameLotofacil();
    }

    
    return(
        <React.Fragment>
            <Header historyBets="Home" navLink1={userName} navLink2="Log out" />
            <Container >
                <Main>

                <Title><strong>NEW BET</strong> 
                    {lotofacilActive ? ' FOR LOTOFÁCIL' : ''}
                    {megaSenaActive  ? ' FOR MEGA-SENA' : ''}
                    {lotomaniaActive ? ' FOR LOTOMANIA' : ''}
                </Title>

                <ChooseGame>
                    <p>Choose a game</p>
                    <button onClick={() => activeGameSelected('lotofacil')} className="btn-lotofacil" >Lotofacil</button>
                    <button onClick={() => activeGameSelected('megasena')} className="btn-mega-sena" >Mega-Sena</button>
                    <button onClick={() => activeGameSelected('lotomania')} className="btn-lotomania" >Lotomania</button>
                </ChooseGame>


                {
                    lotofacilActive 
                    ? 
                    <React.Fragment>
                        <Description>
                            <p><strong>Fill your bet (Lotofácil)</strong></p>
                            <p>
                                You dial between 15 and 20 numbers, among the 25 available on the wheel, 
                                and you get a premium if you hit 11, 12, 13, 14 or 15 numbers. 
                                You can also let the system choose the numbers for you through of button complete game
                            </p>
                        </Description>

                        <ButtonsVolant>                            
                        {listLotofacil.map((isBtnSelected, buttonIndex) => {
                            return (
                                <button
                                    key={buttonIndex}
                                    style={{
                                        margin: "0.5rem",
                                        backgroundColor: isBtnSelected ? "purple" : ""
                                    }}
                                    onClick={() => toggleButtonStateLotofacil(buttonIndex)}
                                >
                                    {buttonIndex + 1}
                                </button>
                            );
                        })}

                        </ButtonsVolant> 
    
                        <DivActionButtons>
                            <button 
                                className="btn-complete-game" 
                                onClick={handleCompleteGameLotofacil}
                            >
                                Complete game
                            </button>
                            <button className="btn-clear-game" onClick={handleClearGameLotofacil} >Clear game</button>
                            <button 
                                style={{background: buttonAddToCartActive ? 'green' : 'gray'}}
                                className="btn-add-to-cart" 
                                onClick={handleAddtoCart} 
                                disabled={!buttonAddToCartActive}>
                            <AiOutlineShoppingCart/>Add to cart</button>

                        </DivActionButtons>
                    </React.Fragment>
                    : ''
                }

                { 
                    megaSenaActive ? 
                    <React.Fragment>
                        <Description>
                            <p><strong>Fill your bet (Mega-Sena)</strong></p>
                            <p>
                                To play in the Mega-Sena, the bettor must choose at 
                                least six numbers, between 1 and 60. It is allowed to 
                                choose up to 15 tens in the same card ...
                            </p>
                        </Description>
                        <ButtonsVolant>
                            {listMegasena.map((isBtnSelected, buttonIndex) => {
                                return (
                                    <button
                                        key={buttonIndex}
                                        style={{
                                            margin: "0.5rem",
                                            backgroundColor: isBtnSelected ? "green" : ""
                                        }}
                                        onClick={() => toggleButtonStateMegasena(buttonIndex)}
                                    >
                                        {buttonIndex + 1}
                                    </button>
                                );
                            })}                   
                        </ButtonsVolant> 
    
                        <DivActionButtons>
                            <button 
                                className="btn-complete-game" 
                                onClick={handleCompleteGameMegasena}
                            >
                                Complete game
                            </button>

                            <button 
                                onClick={handleClearGameMegasena}
                                className="btn-clear-game" 
                            >
                                Clear game
                            </button>

                            <button 
                                className="btn-add-to-cart" 
                                onClick={handleAddtoCartMegasena}
                                style={{background: buttonAddToCartActive ? 'green' : 'gray'}}
                                disabled={!buttonAddToCartActive}
                            >
                                <AiOutlineShoppingCart/>
                                Add to cart
                            </button>

                        </DivActionButtons>
                    </React.Fragment>
                    : ''
                }

                { 
                    lotomaniaActive ? 
                    <React.Fragment>
                        <Description>
                            <p><strong>Fill your bet (Lotomania)</strong></p>
                            <p>
                                Lotomania is easy to play and win: just choose 50 numbers 
                                and then compete for prizes for 20, 19, 18, 17, 16, 15 or no numbers.
                            </p>
                        </Description>
                        <ButtonsVolant>
                        {listLotomania.map((isBtnSelected, buttonIndex) => {
                            return (
                                <button
                                    key={buttonIndex}
                                    style={{
                                        margin: "0.5rem",
                                        backgroundColor: isBtnSelected ? "orange" : "",
                                        width: '50px',
                                        height: '50px',
                                        fontSize: '15px'
                                    }}
                                    onClick={() => toggleButtonStateLotomania(buttonIndex)}
                                >
                                    {buttonIndex + 1}
                                </button>
                            );
                        })}
                        </ButtonsVolant> 
    
                        <DivActionButtons>
                        <button 
                                className="btn-complete-game" 
                                onClick={handleCompleteGameLotomania}
                            >
                                Complete game
                            </button>

                            <button 
                                onClick={handleClearGameLotomania}
                                className="btn-clear-game" 
                            >
                                Clear game
                            </button>

                            <button 
                                className="btn-add-to-cart" 
                                onClick={handleAddtoCartLotomania}
                                style={{background: buttonAddToCartActive ? 'green' : 'gray'}}
                                disabled={!buttonAddToCartActive}
                            >
                                <AiOutlineShoppingCart/>
                                Add to cart
                            </button>
                        </DivActionButtons>
                    </React.Fragment>
                    : ''
                }

                </Main>

                <Cart>
                    
                    <div className="div-box-bets" >
                        <h2>CART</h2>

                            { store.show ?
                            <div className="div-only-bets" >
                                {store.data.map((item , index) => (
                                    <div key={index} className="div-box-bet" >
                                        <div 
                                            className="icon-trash"
                                            onClick={() => handleDeleteBetLotofacil(index)}  
                                        ><BsTrash /></div>
                                        <span className="fillet" ></span>
                                        <div className="div-numbers-game" >
                                            <p>
                                                <strong>
                                                    {item.join(", ")}
                                                </strong>                           
                                            </p>
                                            <p><strong className="name-game" >Lotofácil </strong> R$ 2,50</p>
                                        </div>
                                    </div>
                                ))}



                                {store.data_megasena.map((item , index) => (
                                    <div key={index} className="div-box-bet" >
                                        <div 
                                            className="icon-trash"
                                            onClick={() => handleDeleteBetMegasena(index)}  
                                        ><BsTrash /></div>
                                        <span className="fillet_megasena" ></span>
                                        <div className="div-numbers-game" >
                                            <p>
                                                <strong>
                                                    {item.join(", ")}
                                                </strong>                           
                                            </p>
                                            <p><strong className="name-game-megasena" >Megasena </strong> R$ 4,50</p>
                                        </div>
                                    </div>
                                ))}



                                {store.data_lotomania.map((item , index) => (
                                    <div key={index} className="div-box-bet" >
                                        <div 
                                            className="icon-trash"
                                            onClick={() => handleDeleteBetLotomania(index)}  
                                        ><BsTrash /></div>
                                        <span className="fillet_lotomania" ></span>
                                        <div className="div-numbers-game_lotomania" >
                                            <p>
                                                <strong>
                                                    {item.join(", ")}
                                                </strong>                           
                                            </p>
                                            <p><strong className="name-game-lotomania" >Lotomania </strong> R$ 3,50</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            : ''
                            
                            }


                        <div className="div-cart-total" >
                            <p><strong>CART</strong> TOTAL: R$ {(store.price_total).toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="div-btn-save" >
                        <NavLink className="nav-link-save-games" to="/historyBets" ><button onClick={handleSaveBets} >Save <AiOutlineArrowRight/></button></NavLink>
                    </div>
                    
                </Cart>

            </Container>
        </React.Fragment>
    );
}

export default Games;