import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';

// REDUCER
const mapReducer = (state, { type, payload }) => {
  let newState = { ...state };
  switch (type) {
    case 'set_filters':
      return { ...state, filters: payload };
      
    case 'update_coin_status':
      newState.coinsStatus = newState.coinsStatus.map( c =>
        c.id === payload.id
          ? { ...c, status: payload.newStatus}
          : c
      );
      return newState;
    
    case 'get_cached_data':
      return { ...state, filters: payload };

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
  
  dispatch({ type: 'set_filters', payload: newFilters });
};

// newStatus: 'collected' or 'notCollected'
const updateCoinStatus = dispatch => (id, newStatus) => {
  dispatch({ type: 'update_coin_status', payload: { id, newStatus} });
};

const getCachedData = dispatch => async () => {
  const filters = await AsyncStorage.getItem('filters');
  console.log(filters);
  console.log(JSON.parse(filters));

  if(filters) {
    dispatch({ type: 'get_cached_data', payload: JSON.parse(filters) });
  }
};

// EXPORT
export const { Provider, Context } = createDataContext(
  mapReducer,
  { setFilters, updateCoinStatus, getCachedData },
  { 
    //isLoading: true,
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