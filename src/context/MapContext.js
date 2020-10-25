import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';

// REDUCER
const mapReducer = (state, { type, payload }) => {
  switch (type) {
    case 'set_filters':
      return { ...state, filters: payload };
      
    case 'update_coin_status':
      return { ...state, coinsStatus: payload };
    
    case 'get_cached_data':
      return { ...state, filters: payload.filters, coinsStatus: payload.coinsStatus };

    default:
      return state;
  }
};


// ACTION FUNCTIONS

// filters: array of filters to be updated
// newValue: true or false
const setFilters = (dispatch, state) => async (updatedFilters, newValue) => {
  let newFilters = { ...state.filters };
  updatedFilters.forEach( f => newFilters[f] = newValue);
  await AsyncStorage.setItem('filters', JSON.stringify(newFilters));

  console.log(newFilters);
  
  dispatch({ type: 'set_filters', payload: newFilters });
};

// id: is the id of the coin to be updated
// newStatus: 'collected' or 'notCollected'
const updateCoinStatus = (dispatch, state) => async (id, newStatus) => {
  let newCoinsStatus = [...state.coinsStatus];
  newCoinsStatus = newCoinsStatus.map( c=> 
    c.id === id
      ? { ...c, status: newStatus }
      : c
  );
  await AsyncStorage.setItem('coinsStatus', JSON.stringify(newCoinsStatus));

  dispatch({ type: 'update_coin_status', payload: newCoinsStatus });
};

const getCachedData = dispatch => async () => {
  let filters = await AsyncStorage.getItem('filters');
  let coinsStatus = await AsyncStorage.getItem('coinsStatus');

  // WARNING: this could erase all coinsStatus create by the user
  //          the login + backup will solve the issue
  if(!filters) filters = JSON.stringify(mapContextInitialState.filters);
  if(!coinsStatus) coinsStatus = JSON.stringify(mapContextInitialState.coinsStatus);

  dispatch({ 
    type: 'get_cached_data',
    payload: {
      filters: JSON.parse(filters),
      coinsStatus: JSON.parse(coinsStatus),
    }   
  });

};

// EXPORT
const mapContextInitialState = { 
  coins: [
    { id: '1', coords: { top: 0, left: 0 }, color: 'blue', week: 'week2' }, 
    { id: '2', coords: { top: 100, left: 100 }, color: 'green', week: 'week5' }, 
    { id: '3', coords: { top: 200, left: 200 }, color: 'gold', week: 'week1' },
  ],
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
    gold: true,

    collected: true,
    notCollected: false,
  },
};

export const { Provider, Context } = createDataContext(
  mapReducer,
  { setFilters, updateCoinStatus, getCachedData },
  mapContextInitialState
);