import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext'
import { AiOutlineShoppingCart, AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { /* useSelector,  */useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Creators as BetsActions } from '../../store/ducks/bets';

import Header from '../../components/Header/index';

import {
    Container, 
    Main, 
    Title, 
    ChooseGame, 
    Description, 
    ButtonsVolant, 
    Cart, 
    DivActionButtons,
    Animation
} from './style'; 

const Games = () => {
    const user = useAuth();
    let userName = user.currentUser.displayName   

    const history = useHistory();
    const dispatch = useDispatch();

    const [ infoLotofacil, setInfoLotofacil ] = useState([]);
    const [ infoMegasena , setInfoMegasena ] = useState([]);
    const [ infoQuina, setInfoQuina ] = useState([]);

    useEffect(async() => {
        await api.get('').then(response => {
           /*  console.log(response.data.types[0]) */
            setInfoLotofacil(response.data.types[0])
            setInfoMegasena(response.data.types[1])
            setInfoQuina(response.data.types[2])
        })
    }, [])

    // isso aqui vai criar um array com booleans, todos false
    const BUTTONS_LOTOFACIL = Array.from({ length: 25  }).map(() => false);
    const BUTTONS_MEGASENA  = Array.from({ length: 60  }).map(() => false);
    const BUTTONS_QUINA = Array.from({ length: 80 }).map(() => false);

    const [listLotofacil, setListLotofacil] = useState(BUTTONS_LOTOFACIL);
    const [listMegasena, setListMegasena  ] = useState(BUTTONS_MEGASENA );
    const [listQuina, setListQuina] = useState(BUTTONS_QUINA);

    const [lotofacilActive, setLotofacilActive] = useState(true);
    const [megaSenaActive, setmegaSenaActive]   = useState(false);
    const [quinaActive, setQuinaActive] = useState(false);

    const [betsSavesLotofacil, setBetsSavesLotofacil] = useState([]);
    const [betsSavesMegasena, setBetsSavesMegasena] = useState([]);
    const [betsSavesQuina, setBetsSavesQuina] = useState([]);

    const [ priceCart, setPriceCart ] = useState({
        total_price: 0
    });

    const [ cartLotofacil, setCartLotofacil ] = useState([]);
    const [ cartMegasena, setCartMegasena   ] = useState([]);
    const [ cartQuina, setCartQuina ] = useState([]);

    const [buttonSaveActive, setButtonSaveActive] = useState(true);


    function activeGameSelected(game) {
        if(game === 'lotofacil') {
            setLotofacilActive(true);
            setmegaSenaActive(false)
            setQuinaActive(false)
        }
        
        if(game === 'megasena') {
            setLotofacilActive(false);
            setmegaSenaActive(true)
            setQuinaActive(false)
        }

        if(game === 'quina') {
            setLotofacilActive(false);
            setmegaSenaActive(false)
            setQuinaActive(true)
        }
    }

    function getBetsLotofacil() {
        return listLotofacil.reduce((buttons, isBtnSelected, index) => {
            if (isBtnSelected) {
                return [...buttons, index + 1]
            }
            return buttons;
        }, [])
    }

    function getBetsMegasena() {
        return listMegasena.reduce((buttons, isBtnSelected, index) => {
            if (isBtnSelected) {
                return [...buttons, index + 1]
            }
            return buttons;
        }, [])
    }

    function getBetsQuina() {
        return listQuina.reduce((buttons, isBtnSelected, index) => {
            if (isBtnSelected) {
                return [...buttons, index + 1]
            }
            return buttons;
        }, [])
    }

    function toggleButtonStateLotofacil(buttonIndex) {
        const canToggleBtn = betsLotofacil.length <= 14;

        setListLotofacil((oldList) => {
            const newList = oldList.map((isBtnSelected, index) => {
                const shouldToggleBtnState = index === buttonIndex;
                if(canToggleBtn) {
                    return shouldToggleBtnState === true ? !isBtnSelected : isBtnSelected;
                }
                return isBtnSelected && shouldToggleBtnState ? false : isBtnSelected;
            });
            return newList;
        });
    }

    function toggleButtonStateMegasena(buttonIndex) {
        const canToggleBtn = betsMegasena.length <= 5;
        
        setListMegasena((oldList) => {
            const newList = oldList.map((isBtnSelected, index) => {
                const shouldToggleBtnState = index === buttonIndex;
                if(canToggleBtn) {
                    return shouldToggleBtnState === true ? !isBtnSelected : isBtnSelected;
                }
                return isBtnSelected && shouldToggleBtnState ? false : isBtnSelected;
            });
            return newList;
        });
    }

    function toggleButtonStateQuina(buttonIndex) {
        const canToggleBtn = betsQuina.length <= 4;
        
        setListQuina((oldList) => {
            const newList = oldList.map((isBtnSelected, index) => {
                const shouldToggleBtnState = index === buttonIndex;
                if(canToggleBtn) {
                    return shouldToggleBtnState === true ? !isBtnSelected : isBtnSelected;
                }
                return isBtnSelected && shouldToggleBtnState ? false : isBtnSelected;
            });
            return newList;
        });
    }

    function handleClearGameLotofacil() {
        setListLotofacil(listLotofacil.map(() => false))
    }

    function handleClearGameMegasena() {
        setListMegasena(listMegasena.map(() => false))
    }

    function handleClearGameQuina() {
        setListQuina(listQuina.map(() => false))
    }

    function handleCompleteGameLotofacil() {
        function qtdTrue(value) { return value === true; }
        let filtered = listLotofacil.filter(qtdTrue);

        let qtdToAdd =  15 - filtered.length
        if(betsLotofacil.length < 15) {

            let randonBets = [];
            while(randonBets.length < qtdToAdd) {
                let randomBets = Math.floor(Math.random() * (infoLotofacil.range - 1)) + 1;

                if(randonBets.indexOf(randomBets) === -1) {
                    if(listLotofacil[randomBets - 1] === false) {
                        listLotofacil[randomBets - 1] = true
                        randonBets.push(randomBets);
                    }
                }
            }
            setBetsSavesLotofacil(
                ...betsSavesLotofacil, (randonBets.sort((a,b) => a - b ))
            );  
        } else {
            return toast.info('O Jogo já está completo !');
        }
    } 
          
    function handleCompleteGameMegasena() {
        function qtdTrue(value) { return value === true; }
        let filtered = listMegasena.filter(qtdTrue);

        let qtdToAdd = 6 - filtered.length

        if(betsMegasena.length < 6) {
            let randonBets = [];
            while(randonBets.length < qtdToAdd) {
                let randomBets = Math.floor(Math.random() * (infoMegasena.range - 1)) + 1;
                if(randonBets.indexOf(randomBets) === -1) {
                    if(listMegasena[randomBets - 1] === false) {
                        listMegasena[randomBets - 1] = true
                        randonBets.push(randomBets);
                    }
                }
            }
            setBetsSavesMegasena(
                ...betsSavesMegasena, (randonBets.sort((a,b) => a - b ))
            );
        } 
        else {
            return toast.info('O Jogo já está completo !');
        }
    } 

    function handleCompleteGameQuina() {

        function qtdTrue(value) { return value === true; }
        let filtered = listQuina.filter(qtdTrue);

        let qtdToAdd =  5 - filtered.length

        if(betsQuina.length < 5) {
            let randonBets = [];
            while(randonBets.length < qtdToAdd) {
                let randomBets = Math.floor(Math.random() * (infoQuina.range - 1)) + 1;
                if(listQuina[randomBets - 1] === false) {
                    listQuina[randomBets - 1] = true
                    randonBets.push(randomBets);
                }
            }
            setBetsSavesQuina(
                ...betsSavesQuina, (randonBets.sort((a,b) => a - b ))
            );           
        } 
        else {
            return toast.info('O Jogo já está completo !');
        }
    } 

    useEffect(() => {
        if(priceCart.total_price >= 30) {
            return setButtonSaveActive(false);
        }
        return setButtonSaveActive(true);
    }, [
        handleAddtoCartLotofacil, 
        handleClearGameMegasena, 
        handleAddtoCartQuina,
        handleDeleteBetLotofacil,
        handleDeleteBetMegasena,
        handleDeleteBetQuina
    ])

    function handleAddtoCartLotofacil() {
        
        setCartLotofacil((oldList) => [
            ...oldList, betsLotofacil
        ]);

        setPriceCart({
            ...priceCart,
            total_price: priceCart.total_price + infoLotofacil.price,
        });

        handleClearGameLotofacil();
    }

    function handleAddtoCartMegasena() {

        setCartMegasena((oldList) => [
            ...oldList, betsMegasena
        ]);

        setPriceCart({
            ...priceCart,
            total_price: priceCart.total_price + infoMegasena.price,
        });

        handleClearGameMegasena();
    }

    function handleAddtoCartQuina() {

        setCartQuina((oldList) => [
            ...oldList, betsQuina
        ]);

        setPriceCart({
            ...priceCart,
            total_price: priceCart.total_price + infoQuina.price,
        });

        handleClearGameQuina();
    }

    function handleDeleteBetLotofacil(index1) {
        priceCart.total_price < 30 && setButtonSaveActive(true);

        setPriceCart({
            ...priceCart,
            total_price: priceCart.total_price - infoLotofacil.price,
        });

        let newData = cartLotofacil.filter((item, index) => index !== index1)
        setCartLotofacil(newData);

    }

    function handleDeleteBetMegasena(index1) {
        priceCart.total_price < 30 && setButtonSaveActive(true);
        setPriceCart({
            ...priceCart,
            total_price: priceCart.total_price - infoMegasena.price,
        });

        let newData = cartMegasena.filter((item, index) => index !== index1)
        setCartMegasena(newData);
    }

    function handleDeleteBetQuina(index1) {
        priceCart.total_price < 30 && setButtonSaveActive(true);
        setPriceCart({
            ...priceCart,
            total_price: priceCart.total_price - infoQuina.price,
        });

        let newData = cartQuina.filter((item, index) => index !== index1)
        setCartQuina(newData);
    }

    useEffect(() => {
        if(cartLotofacil.length > 0 || cartMegasena.length > 0 || cartQuina.length > 0) {
            setButtonSaveActive(false)
        } else {
            setButtonSaveActive(true)
        }
    }, [cartLotofacil, cartMegasena, cartQuina])
    

    function handleSaveBets() {
        if(priceCart.total_price >= 30) {
            dispatch(BetsActions.saveBets(
                cartLotofacil, 
                cartMegasena, 
                cartQuina, 
                new Date().toLocaleDateString(),
            ))
    
            toast.success('Apostas salvas com sucesso !');
    
            setTimeout(() => {
                setCartLotofacil([]);
                setCartMegasena([]);
                setCartQuina([]);
                setPriceCart({...priceCart, total_price: 0})
                handleClearGameQuina();
                handleClearGameMegasena();
                handleClearGameLotofacil();
                history.push('/history-Bets')
            }, 4000)

        } else {
            return toast.warn(`${userName}, você precisa fazer no mínimo R$30,00, de apostas !`)
        }   
    }

    const betsLotofacil = getBetsLotofacil();
    const isAddToCartBtnLotofacilDisabled = betsLotofacil.length <= 14 || betsLotofacil.length >= 16;

    const betsMegasena = getBetsMegasena();
    const isAddToCartBtnMegasenaDisabled = betsMegasena.length <= 5 || betsMegasena.length >= 7;

    const betsQuina = getBetsQuina();
    const isAddToCartBtnQuinaDisabled = betsQuina.length <= 4 || betsQuina.length >= 6;
    /* console.log({betsLotofacil}) */

    return(
        <React.Fragment>
            <Header historyBets="Home" navLink1={userName} navLink2="Sair" />
            <Container >
                <Animation>
                <Main>

                <Title><strong>NOVA APOSTA </strong> 
                    {lotofacilActive ? ' PARA LOTOFÁCIL' : ''}
                    {megaSenaActive  ? ' PARA MEGA-SENA' : ''}
                    {quinaActive ? ' PARA QUINA' : ''}
                </Title>

                <ChooseGame>
                    <p>Escolha um jogo</p>
                    <button 
                        onClick={() => activeGameSelected('lotofacil')} 
                        className={lotofacilActive ? "btn-lotofacil-active" : "btn-lotofacil"}>Lotofácil
                    </button>

                    <button 
                        onClick={() => activeGameSelected('megasena')} 
                        className={megaSenaActive ? "btn-megasena-active" : "btn-megasena"}>MegaSena
                    </button>

                    <button 
                        onClick={() => activeGameSelected('quina')} 
                        className={quinaActive ? "btn-quina-active" : "btn-quina"} >Quina
                    </button>
                </ChooseGame>


                {
                    lotofacilActive 
                    ? 
                    <React.Fragment>
                        <Description>
                            <p><strong>Faça sua aposta ({ infoLotofacil.type })</strong></p>
                            <p>{ infoLotofacil.description }</p>
                        </Description>

                        <ButtonsVolant>                            
                        {listLotofacil.map((isBtnSelected, buttonIndex) => {
                            return (
                                <button
                                    key={buttonIndex}
                                    style={{
                                        margin: "0.5rem",
                                        backgroundColor: isBtnSelected ?  `${infoLotofacil.color}` : ""
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
                                Completar jogo
                            </button>
                            <button className="btn-clear-game" onClick={handleClearGameLotofacil} >Limpar jogo</button>
                            <button 
                                style={{
                                    background: isAddToCartBtnLotofacilDisabled ? 'gray' : 'green',
                                    borderColor: isAddToCartBtnLotofacilDisabled ? 'gray' : 'green',
                                }}
                                className="btn-add-to-cart" 
                                onClick={handleAddtoCartLotofacil} 
                                disabled={isAddToCartBtnLotofacilDisabled}>
                            <AiOutlineShoppingCart/>Adcionar ao carrinho</button>

                        </DivActionButtons>
                    </React.Fragment>
                    : ''
                }

                { 
                    megaSenaActive ? 
                    <React.Fragment>
                        <Description>
                            <p><strong>Faça sua aposta ({infoMegasena.type})</strong></p>
                            <p>{infoMegasena.description}</p>
                        </Description>
                        <ButtonsVolant>
                            {listMegasena.map((isBtnSelected, buttonIndex) => {
                                return (
                                    <button
                                        key={buttonIndex}
                                        style={{
                                            margin: "0.5rem",
                                            backgroundColor: isBtnSelected ? `${infoMegasena.color}` : ""
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
                                Completar jogo
                            </button>

                            <button 
                                onClick={handleClearGameMegasena}
                                className="btn-clear-game" 
                            >
                                Limpar jogo
                            </button>

                            <button 
                                className="btn-add-to-cart" 
                                onClick={handleAddtoCartMegasena}
                                style={{
                                    background: isAddToCartBtnMegasenaDisabled ? 'gray' : 'green',
                                    borderColor: isAddToCartBtnMegasenaDisabled ? 'gray' : 'green',
                                }}
                                disabled={isAddToCartBtnMegasenaDisabled}
                            >
                                <AiOutlineShoppingCart/>
                                Adcionar ao carrinho
                            </button>

                        </DivActionButtons>
                    </React.Fragment>
                    : ''
                }

                { 
                    quinaActive ? 
                    <React.Fragment>
                        <Description>
                            <p><strong>Faça sua aposta ({infoQuina.type})</strong></p>
                            <p>{infoQuina.description}</p>
                        </Description>
                        <ButtonsVolant>
                        {listQuina.map((isBtnSelected, buttonIndex) => {
                            return (
                                <button
                                    key={buttonIndex}
                                    style={{
                                        margin: "0.5rem",
                                        backgroundColor: isBtnSelected ? `${infoQuina.color}` : "",
                                        width: '50px',
                                        height: '50px',
                                        fontSize: '15px'
                                    }}
                                    onClick={() => toggleButtonStateQuina(buttonIndex)}
                                >
                                    {buttonIndex + 1}
                                </button>
                            );
                        })}
                        </ButtonsVolant> 
    
                        <DivActionButtons>
                        <button 
                                className="btn-complete-game" 
                                onClick={handleCompleteGameQuina}
                            >
                                Completar jogo
                            </button>

                            <button 
                                onClick={handleClearGameQuina}
                                className="btn-clear-game" 
                            >
                                Limpar jogo
                            </button>

                            <button 
                                className="btn-add-to-cart" 
                                onClick={handleAddtoCartQuina}
                                style={{
                                    background: isAddToCartBtnQuinaDisabled ? 'gray' : 'green',
                                    borderColor: isAddToCartBtnQuinaDisabled ? 'gray' : 'green',
                                }}
                                disabled={isAddToCartBtnQuinaDisabled}
                            >
                                <AiOutlineShoppingCart/>
                                Adcionar ao carrinho
                            </button>
                        </DivActionButtons>
                    </React.Fragment>
                    : ''
                }

                </Main>
                </Animation> 
                <Cart>
                    <Animation> 
                    <div className="div-box-bets" >
                        <h2>CARRINHO</h2>
                            {   
                                cartLotofacil.length <= 0 
                                && cartMegasena.length <= 0 
                                && cartQuina.length <= 0 &&
                                <p className="empty-cart" >Carrinho vazio</p>
                            }
                            <div className="div-only-bets" >
                                {cartLotofacil.map((item , index) => (
                                    <div key={index} className="div-box-bet" >
                                        <div 
                                            className="icon-trash"
                                            onClick={() => handleDeleteBetLotofacil(index)}  
                                        ><BsTrash className="icon-trash" /></div>
                                        <span className="fillet" ></span>
                                        <div className="div-numbers-game" >
                                            <p>
                                                <strong>
                                                    {item.join(", ")}
                                                </strong>                           
                                            </p>
                                            <p><strong className="name-game" >Lotofácil </strong> R$ {infoLotofacil.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}

                                {cartMegasena.map((item , index) => (
                                    <div key={index} className="div-box-bet" >
                                        <div 
                                            className="icon-trash"
                                            onClick={() => handleDeleteBetMegasena(index)}  
                                        ><BsTrash className="icon-trash" /></div>
                                        <span className="fillet_megasena" ></span>
                                        <div className="div-numbers-game" >
                                            <p>
                                                <strong>
                                                    {item.join(", ")}
                                                </strong>                           
                                            </p>
                                            <p><strong className="name-game-megasena" >Megasena </strong> R$ {infoMegasena.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}

                                {cartQuina.map((item , index) => (
                                    <div key={index} className="div-box-bet" >
                                        <div 
                                            className="icon-trash"
                                            onClick={() => handleDeleteBetQuina(index)}  
                                        >
                                            <BsTrash className="icon-trash" />
                                        </div>
                                        <span className="fillet_quina" ></span>
                                        <div className="div-numbers-game_quina" >
                                            <p>
                                                <strong>
                                                    {item.join(", ")}
                                                </strong>                           
                                            </p>
                                            <p><strong className="name-game-quina" >Quina </strong> R$ {infoQuina.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        <div className="div-cart-total" >
                            <p><strong>Carrinho</strong> TOTAL: R$ {(priceCart.total_price).toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="div-btn-save" >
                        <button className={!buttonSaveActive && 'style-btn-save-active'} style={{color: buttonSaveActive ? 'gray' : 'green'}} disabled={buttonSaveActive} onClick={handleSaveBets} >Salvar <AiOutlineArrowRight/></button>
                    </div>
                    </Animation> 
                </Cart>
                                        
            </Container>
        </React.Fragment>
    );
}

export default Games;