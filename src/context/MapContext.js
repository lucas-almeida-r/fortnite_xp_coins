import createDataContext from './createDataContext';

// REDUCER
const mapReducer = (state, { type, payload }) => {
  let newState = { ...state };
  switch (type) {
    case 'set_filters':
      payload.filters.forEach( f => newState.filters[f] = payload.newValue);
      return newState;
    default:
      return state;
  }
};


// ACTION FUNCTIONS

// filters: array of filters to be updated
const setFilters = dispatch => (filters, newValue) => {
  dispatch({ type: 'set_filters', payload: { filters, newValue } });
};


// EXPORT
export const { Provider, Context } = createDataContext(
  mapReducer,
  { setFilters },
  { 
    // downloaded from internet
    coins: [
      { id: '1', coords: { top: 50, left: 50 }, color: 'blue', week: 'week2' }, 
      { id: '2', coords: { top: 50, left: 20 }, color: 'green', week: 'week5' }, 
      { id: '3', coords: { top: 200, left: 10 }, color: 'golden', week: 'week1' },
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