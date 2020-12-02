import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {NavLink} from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Header from '../../components/Header/index';
import {SubHeader, Main, Games} from './style';

import {useSelector} from 'react-redux';

const HistoryBets = (props) => {

  const user = useAuth();
  let userName = user.currentUser.displayName

  const store = useSelector(state => state)
  console.log('BETS SAVED:', store.data_lotofacil_to_save)

  const [lotofacilActive, setLotofacilActive] = useState(false);
  const [megasenaActive, setMegasenaActive] = useState(false);
  const [lotomaniaActive, setLotomaniaActive] = useState(false);
  console.log('STORE REDUX:', store)
  return (  
    <div>
      <Header navLink1={userName} navLink2="Sair" />
      <Main>
        <SubHeader>

          <h2>RECENT GAMES</h2> 
          <div className="filters" >
            <p>Filters</p>
            <button className="btn-lotofacil" onClick={() => setLotofacilActive(!lotofacilActive)} >Lotofácil</button>
            <button className="btn-mega-sena" onClick={() => setMegasenaActive(!megasenaActive)} >Mega-Sena</button>
            <button className="btn-lotomania" onClick={() => setLotomaniaActive(!lotomaniaActive)} >Lotomania</button>
          </div>

          <NavLink className="NavLink-New-Bet" to="/games" >New Bet<AiOutlineArrowRight/></NavLink>
        </SubHeader>
        <Games>
          {
          lotofacilActive ? 
            <React.Fragment>
              {
                store.data_lotofacil_to_save.map((item, index) => {
                  if(item.length > 1) {
                    return (
                      <div key={index} className="div-lotofacil" >
                        <span className="column-lotofacil" />
                        <div className="div-rows-lotofacil">
                          <p><strong>{item.join(", ")}</strong></p>
                          <p>{store.date} - (R$ 2,50)</p>
                          <p><strong className="strong-lotofacil" >Lotofácil</strong></p>
                        </div>
                      </div> 
                    )
                  } 
                  return ''
                })
              }
            </React.Fragment>: ''
          }

          {
            megasenaActive ?
            <React.Fragment>
              {
                store.data_megasena_to_save.map((item, index) => {
                  if(item.length > 1) {
                    return (
                      <div key={index} className="div-mega-sena" >
                        <span className="column-mega-sena" />
                        <div className="div-rows-mega-sena">
                          <p><strong>{item.join(", ")}</strong></p>
                          <p>{store.date} - (R$ 4,50)</p>
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
            lotomaniaActive ?
            <React.Fragment>
              {
                store.data_lotomania_to_save.map((item, index) => {
                  if(item.length > 1) {
                    return (
                      <div key={index} className="div-lotomania" >
                        <span className="column-lotomania" />
                        <div className="div-rows-lotomania">
                          <p><strong>{item.join(", ")}</strong></p>
                          <p>{store.date} - (R$ 3,50)</p>
                          <p><strong className="strong-lotomania" >Lotomania</strong></p>
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
      </Main>
    </div>
  );
}

export default HistoryBets;