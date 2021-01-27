import React, { useState, useEffect } from 'react';
/* import { useAuth } from '../../context/AuthContext'; */
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Header from '../../components/Header/index';
import { SubHeader, Main, Animation, Games } from './style';
import { /* api */ apiAdonis } from '../../services/api';

/* import { useSelector } from 'react-redux'; */

const HistoryBets = () => {

  const [ infoLotofacil, setInfoLotofacil ] = useState([]);
  const [ infoMegasena , setInfoMegasena ] = useState([]);
  const [ infoQuina, setInfoQuina ] = useState([]);

  useEffect( async () => {
    await apiAdonis.get('types').then(response => {
        console.log('RESPONSE TYPES API ADONIS: ', response.data[0])
        setInfoLotofacil(response.data[0])
        setInfoMegasena(response.data[1])
        setInfoQuina(response.data[2])
    })
    
},[])

  const userData = localStorage.getItem('@tokenLottery')
  const userName = JSON.parse(userData)
  const user_id = userName.userName.id

  const storage = localStorage.getItem('@tokenLottery')
  const auth = JSON.parse(storage)

  if(storage) {
    apiAdonis.defaults.headers.authorization = `Bearer ${auth.token.token}`
  }
  
  /* const store = useSelector(state => state) */

  const [lotofacilActive, setLotofacilActive] = useState(true);
  const [megasenaActive, setMegasenaActive] = useState(true);
  const [quinaActive, setQuinaActive] = useState(true);

  const [ dbInformation, setDbInformation ] = useState([])

  useEffect(() => {
    async function handleRequestGames () {
      await apiAdonis.get(`games?id=${user_id}`).then(res => {
        console.log('RESPONSE GAMES', res.data)
        setDbInformation(...dbInformation, res.data)
      })
    }
    handleRequestGames ()
  }, [])

  function handleWithHistoryBets(game) {
    if (game === 'lotofacil') {
      setLotofacilActive(!lotofacilActive)
    }

    if (game === 'megasena') {
      setMegasenaActive(!megasenaActive)
    }

    if (game === 'quina') {
      setQuinaActive(!quinaActive)
    }
  }

  return (  
    <div>
      <Header navLink1={userName.userName.username} navLink2="Sair" />
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
          
          { dbInformation.length <= 0 && 
            <p className="message-empty-bets" >
              Você não tem nenhuma aposta salva, faça a sua agora clicando em nova aposta !
            </p>
          }

          {
            dbInformation.map(item => {

              if (lotofacilActive) {
                if (item.game_id === 1) {
                  return (
                    <div key={item.id} className="div-lotofacil" >
                      <span className="column-lotofacil" />
                      <div className="div-rows-lotofacil">
                        <p><strong>{item.numbers}</strong></p>
                        <p>{item.date} - (R$ 2,50)</p>
                        <p><strong className="strong-lotofacil" >Lotofácil</strong></p>
                      </div>
                    </div> 
                  )
                }
              }

              if (megasenaActive) {
                if (item.game_id === 2) {
                  return (
                    <div key={item.id} className="div-mega-sena" >
                      <span className="column-mega-sena" />
                      <div className="div-rows-mega-sena">
                        <p><strong>{item.numbers}</strong></p>
                        <p>{item.date} - (R$ 4,50)</p>
                        <p><strong className="strong-mega-sena" >Mega Sena</strong></p>
                      </div>
                    </div>
                  )
                }
              }

              if (quinaActive) {
                if (item.game_id === 3) {
                  return (
                    <div key={item.id} className="div-quina" >
                      <span className="column-quina" />
                      <div className="div-rows-quina">
                        <p><strong>{item.numbers}</strong></p>
                        <p>{item.date} - (R$ 3,50)</p>
                        <p><strong className="strong-quina" >Quina</strong></p>
                      </div>
                    </div>
                  );
                }
              }
            })
          }
        </Games>
        </Animation>
      </Main>
    </div>
  );
}

export default HistoryBets;