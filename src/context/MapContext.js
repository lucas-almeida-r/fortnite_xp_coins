//
// MapContext is the only Context of the app.
// It has all data related to map, filters and xp coins.
//

import AsyncStorage from '@react-native-community/async-storage';
import { Image, Platform } from "react-native";
import createDataContext from './createDataContext';
import { storage } from '../firebase';

// REDUCER
const mapReducer = (state, { type, payload }) => {
  switch (type) {
    case 'set_filters':
      return { ...state, filters: payload };
      
    case 'update_coin_status':
      return { ...state, coinsStatus: payload };
    
    case 'get_initial_data':
      return { 
        ...state,
        coins: payload.coins,
        filters: payload.filters, 
        coinsStatus: payload.coinsStatus,
        mapUrl: payload.mapUrl,
        isOnline: payload.isOnline,
      };

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


// id: id (string) of the coin to be updated
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


// callback: function called at the end of getInitialData
const getInitialData = dispatch => async (callback) => {
  let coins;
  let mapUrl = '';
  let isOnline = false;

  try {
    if (Platform.OS === 'web') {
      // coins and map are always updated in the web version
      coins = require('../../assets/xp_coins.json');
    } else {
      const coinsRef = storage.ref('xp_coins.json');
      const coinsUrl = await coinsRef.getDownloadURL();
      coins = await fetch(coinsUrl);
      coins = await coins.json();
      //throw 'error';
      
      const mapRef = storage.ref('map.jpg');
      mapUrl = await mapRef.getDownloadURL();
      await Image.prefetch(mapUrl);
  }
  
  isOnline = true;

  } catch (err) {
    coins = require('../../assets/xp_coins.json');
    isOnline = false;
  }

  let filters = await AsyncStorage.getItem('filters');
  let coinsStatus = await AsyncStorage.getItem('coinsStatus');

  // WARNING: if AsyncStorage fails when it was not suppose to, it will erase all 
  //          coinsStatus create by the user. The login + backup will solve the issue
  if(!filters) filters = JSON.stringify(mapContextInitialState.filters);
  if(!coinsStatus) coinsStatus = JSON.stringify(mapContextInitialState.coinsStatus);

  filters = JSON.parse(filters);
  coinsStatus = JSON.parse(coinsStatus);

  // if there are missing coins id in coinsStatus, we create new entries in coinsStatus
  coins.forEach(c => {
    if(!coinsStatus.find(s => s.id === c.id)) {
      coinsStatus.push({
        id: c.id,
        status: 'notCollected'
      });
    }
  });

  // clean old entries of coinStatus
  const oldestCoinId = Math.min(...coins.map(c => parseInt(c.id)));
  if (oldestCoinId !== Infinity) {
    coinsStatus = coinsStatus.filter(c => parseInt(c.id) >= oldestCoinId);
  }

  dispatch({ 
    type: 'get_initial_data',
    payload: {
      coins,
      filters, 
      coinsStatus,
      mapUrl,
      isOnline,
    }   
  });

  callback();
};


// EXPORT
const mapContextInitialState = {
  isOnline: false,
  mapUrl: '',
  coins: [],
  coinsStatus: [],
  filters: {
    week1: true,
    week2: true,
    week3: true,
    week4: true,
    week5: true,
    week6: true,
    week7: true,
    week8: true,
    week9: true,
    week10: true,

    green: true,
    blue: true,
    purple: true,
    gold: true,

    collected: true,
    notCollected: true,
  },
};

export const { Provider, Context } = createDataContext(
  mapReducer,
  { setFilters, updateCoinStatus, getInitialData },
  mapContextInitialState
);