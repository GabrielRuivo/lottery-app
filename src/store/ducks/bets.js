export const Types = {
  CLEAR_STATE: 'CLEAR_STATE',
  SAVE_BETS: 'SAVE_BETS',
}

const INITIAL_STATE = {
	date: null,
	data_lotofacil_to_save: [],
	data_megasena_to_save: [],
	data_quina_to_save: [],
}

export default function betsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
	/* case Types.SAVE_BETS: return saveBets(state, action); */

    case Types.SAVE_BETS: 
		return {
			...state, 
			data_lotofacil_to_save: [...state.data_lotofacil_to_save, action.payload.cartLotofacil], 
			data_megasena_to_save:  [...state.data_megasena_to_save,  action.payload.cartMegasena ], 
			data_quina_to_save: [...state.data_quina_to_save, action.payload.cartQuina], 
			date: action.payload.date,
		}

    default: return state;

  }
}

export const Creators = {
	saveBets: (cartLotofacil, cartMegasena, cartQuina, date) => ({
		type: Types.SAVE_BETS,
		payload: {
			cartLotofacil,
			cartMegasena,
			cartQuina,
			date
		}
	}),
}
