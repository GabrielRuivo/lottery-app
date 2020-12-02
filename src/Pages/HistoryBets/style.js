import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1280px;
  padding: 5rem;
  margin: 0 auto;
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
    .btn-mega-sena,
    .btn-lotomania {
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
  }

`;

export const Games = styled.div`
  width: 26rem;
  /* background: #ccc; */
  margin: 2rem 0;

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

  .div-lotomania {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .column-lotomania {
      width: 0.9rem;
      height: 8rem;
      border-radius: 10px;
      background: orange;
    }

    .div-rows-lotomania {
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

      .strong-lotomania {
        color: orange;
      }
    }
  }
`;