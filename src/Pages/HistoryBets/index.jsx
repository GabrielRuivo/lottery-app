import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Header from '../../components/Header/index';
import { SubHeader, Main, Animation, Games } from './style';
import api from '../../services/api';

import {useSelector} from 'react-redux';

const HistoryBets = () => {

  const [ infoLotofacil, setInfoLotofacil ] = useState([]);
  const [ infoMegasena , setInfoMegasena ] = useState([]);
  const [ infoQuina, setInfoQuina ] = useState([]);

  useEffect(async() => {
    await api.get('').then(response => {
      console.log(response.data.types[0])
      setInfoLotofacil(response.data.types[0])
      setInfoMegasena(response.data.types[1])
      setInfoQuina(response.data.types[2])
    })
  }, [])
  console.log(infoLotofacil.color, infoMegasena.color,  infoQuina.color)

  // isso aqui vai criar um array com booleans, todos false
  const user = useAuth();
  console.log(user)
  let userName = user.currentUser.displayName

  const store = useSelector(state => state)
  console.log('STORE', store.bets)

  const [lotofacilActive, setLotofacilActive] = useState(true);
  const [megasenaActive, setMegasenaActive]   = useState(true);
  const [quinaActive, setQuinaActive] = useState(true);

  useEffect(() => {
    if(store.bets.data_lotofacil_to_save.length <= 0) {
      setLotofacilActive(false)
    }
    
    if(store.bets.data_megasena_to_save.length <= 0 ) {
      setMegasenaActive(false)
    } 

    if(store.bets.data_quina_to_save.length <= 0 ) {
      setQuinaActive(false)
    } 
  }, [])

  function handleWithHistoryBets(game) {
    if (game === 'lotofacil') {
      if(store.bets.data_lotofacil_to_save.length > 0 ) {
        setLotofacilActive(!lotofacilActive)
      }
    }

    if (game === 'megasena') {
      if(store.bets.data_megasena_to_save.length > 0 ) {
        setMegasenaActive(!megasenaActive)
      }
    }

    if (game === 'quina') {
      if(store.bets.data_quina_to_save.length > 0 ) {
        setQuinaActive(!quinaActive)
      }
    }
  }

  return (  
    <div>
      <Header navLink1={userName} navLink2="Sair" />
      <Main>
      <Animation>
        <SubHeader 
          bgLotofacil={infoLotofacil.color} 
          bgMegasena={infoMegasena.color} 
          bgQuina={infoQuina.color}  
        >

          <h2>JOGOS RECENTES</h2> 
          <div className="filters" >
            <p>Filtros</p>
            
            <button 
              className={lotofacilActive ? "btn-lotofacil-active" : "btn-lotofacil"} 
              onClick={() => handleWithHistoryBets('lotofacil')} >Lotofácil
            </button>

            <button 
              className={megasenaActive ? "btn-megasena-active" : "btn-megasena"} 
              onClick={() => handleWithHistoryBets('megasena')} >Mega-Sena
            </button>

            <button 
              className={quinaActive ? "btn-quina-active" : "btn-quina"}  
              onClick={() => handleWithHistoryBets('quina')} >Quina
            </button>

          </div>

          <NavLink className="NavLink-New-Bet" to="/games" >Nova Aposta<AiOutlineArrowRight/></NavLink>
        </SubHeader>
        <Games
          bgLotofacil={infoLotofacil.color} 
          bgMegasena={infoMegasena.color} 
          bgQuina={infoQuina.color}  
        >
          
          {
            store.bets.data_lotofacil_to_save.length <= 0 && 
            store.bets.data_megasena_to_save.length <= 0 && 
            store.bets.data_quina_to_save.length <= 0 
            && <p className="message-empty-bets" >
                Você não tem nenhuma aposta salva, faça a sua agora clicando em nova aposta !
              </p>
          }
          {
          lotofacilActive ? 
            <React.Fragment>
              {
                store.bets.data_lotofacil_to_save.flat(1).map((item, index) => {
                  console.log('ITEM LOTOFACIL', item)
                  if(item.length > 0) {
                    return (
                      <div key={index} className="div-lotofacil" >
                        <span className="column-lotofacil" />
                        <div className="div-rows-lotofacil">
                          <p><strong>{item.join(', ')}</strong></p>
                          <p>{store.bets.date} - (R$ 2,50)</p>
                          <p><strong className="strong-lotofacil" >Lotofácil</strong></p>
                        </div>
                      </div> 
                    )
                  }
                  return ''
                })
              }
            </React.Fragment> : ''
          }

          {
            megasenaActive ?
            <React.Fragment>
              {
                store.bets.data_megasena_to_save.flat(1).map((item, index) => {
                  if(item.length > 0) {
                    return (
                      <div key={index} className="div-mega-sena" >
                        <span className="column-mega-sena" />
                        <div className="div-rows-mega-sena">
                          <p><strong>{item.join(", ")}</strong></p>
                          <p>{store.bets.date} - (R$ 4,50)</p>
                          <p><strong className="strong-mega-sena" >Mega Sena</strong></p>
                        </div>
                      </div>
                    )
                  }
                  return ''
                })
              }
            </React.Fragment>
             : ''
          }
          
          {
            quinaActive ?
            <React.Fragment>
              {
                store.bets.data_quina_to_save.flat(1).map((item, index) => {
                  if(item.length > 0) {
                    return (
                      <div key={index} className="div-quina" >
                        <span className="column-quina" />
                        <div className="div-rows-quina">
                          <p><strong>{item.join(", ")}</strong></p>
                          <p>{store.bets.date} - (R$ 3,50)</p>
                          <p><strong className="strong-quina" >Quina</strong></p>
                        </div>
                      </div>
                    );
                  }
                  return ''
                })
              }
            </React.Fragment> : ''
          }
          
        </Games>
        </Animation>
      </Main>
    </div>
  );
}

export default HistoryBets;