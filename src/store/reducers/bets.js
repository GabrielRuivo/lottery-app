const INITIAL_STATE = {
   date: null,
   data: [],
   data_megasena: [],
   data_lotomania: [],
   data_lotofacil_to_save: [],
   data_megasena_to_save: [],
   data_lotomania_to_save: [],
   show: false,
   price_total: 0,
   price_lotofacil: 2.50,
   price_megasena: 4.50,
   price_lotomania: 3.50,
}


function reducer(state = INITIAL_STATE, action){
   switch(action.type) {

      case 'ADD_TO_CART_LOTOFACIL': 
         return {
            ...state, 
            data: [...state.data, action.payload], 
            date: action.date,
            show: true,
            price_total: state.price_total + state.price_lotofacil,
         }

         case 'DELETE_BET_LOTOFACIL_TO_CART': 
            let newData = state.data.filter((item, index) => index !== action.index)
            return {
               ...state,
               data: [...newData],
               price_total: state.price_total - state.price_lotofacil,
            }

         case 'ADD_TO_CART_MEGASENA': 
            return {
               ...state, 
               data_megasena: [...state.data_megasena, action.payload_megasena], 
               date: action.date,
               show: true,
               price_total: state.price_total + state.price_megasena,
            }

         case 'ADD_TO_CART_LOTOMANIA': 
            return {
               ...state, 
               data_lotomania: [...state.data_lotomania, action.payload_lotomania], 
               date: action.date,
               show: true,
               price_total: state.price_total + state.price_lotomania,
            }

         case 'DELETE_BET_MEGASENA_TO_CART': 
            let newDataMegasena = state.data_megasena.filter((item, index) => index !== action.index)
            return {
               ...state,
               data_megasena: [...newDataMegasena],
               price_total: state.price_total - state.price_megasena,
            }


         case 'DELETE_BET_LOTOMANIA_TO_CART': 
            let newDataLotomania = state.data_lotomania.filter((item, index) => index !== action.index)
            return {
               ...state,
               data_lotomania: [...newDataLotomania],
               price_total: state.price_total - state.price_lotomania,
            }

         case 'SAVE_BETS': 
            return {
               ...state, 
               data_lotofacil_to_save: [...state.data, action.payload_lotofacil], 
               data_megasena_to_save:  [...state.data_megasena, action.payload_megasena], 
               data_lotomania_to_save: [...state.data_lotomania, action.payload_lotomania], 
               date: action.date,
            }
               
         default: 
         return state;
   }
}

export default reducer;