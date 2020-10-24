import createDataContext from './createDataContext';

// REDUCER
const mapReducer = (state, { type, payload }) => {
  let newState = { ...state };
  switch (type) {
    case 'set_filters':
      payload.filters.forEach( f => newState.filters[f] = payload.newValue);
      return newState;
      
    case 'update_coin_status':
      newState.coinsStatus = newState.coinsStatus.map( c =>
        c.id === payload.id
          ? { ...c, status: payload.newStatus}
          : c
      );
      return newState;
      
    default:
      return state;
  }
};


// ACTION FUNCTIONS

// filters: array of filters to be updated
// newValue: true or false
const setFilters = dispatch => (filters, newValue) => {
  dispatch({ type: 'set_filters', payload: { filters, newValue } });
};

// newStatus: 'collected' or 'notCollected'
const updateCoinStatus = dispatch => (id, newStatus) => {
  dispatch({ type: 'update_coin_status', payload: { id, newStatus} });
};


// EXPORT
export const { Provider, Context } = createDataContext(
  mapReducer,
  { setFilters, updateCoinStatus },
  { 
    // downloaded from internet
    coins: [
      { id: '1', coords: { top: 0, left: 0 }, color: 'blue', week: 'week2' }, 
      { id: '2', coords: { top: 100, left: 100 }, color: 'green', week: 'week5' }, 
      { id: '3', coords: { top: 200, left: 200 }, color: 'golden', week: 'week1' },
    ],

    // set by the user
    coinsStatus: [
      { id: '1', status: 'collected' }, 
      { id: '2', status: 'notCollected' }, 
      { id: '3', status: 'collected' },
    ],
    filters: {
      week1: true,
      week2: true,
      week3: true,
      week4: true,
      week5: false,
      week6: true,
      week7: true,
      week8: true,
      week9: true,
      week10: false,

      green: true,
      blue: true,
      purple: false,
      golden: true,

      collected: true,
      notCollected: false,
    },
  }
);