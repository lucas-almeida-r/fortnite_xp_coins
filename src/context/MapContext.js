import createDataContext from './createDataContext';

// REDUCER
const mapReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// ACTION FUNCTIONS

const example = dispatch => () => {

};


// EXPORT
export const { Provider, Context } = createDataContext(
  mapReducer,
  {},
  { 
    coins: [
      { id: '1', coords: { top: 50, left: 50 }, color: 'blue', week: 'week2', status: 'collected' }, 
      { id: '2', coords: { top: 50, left: 20 }, color: 'green', week: 'week5', status: 'notCollected' }, 
      { id: '3', coords: { top: 200, left: 10 }, color: 'golden', week: 'week1', status: 'collected' }
    ],
    filters: {
      week1: true,
      week2: true,
      week3: true,
      week4: true,
      week5: false,

      green: true,
      blue: true,
      purple: false,
      golden: true,

      collected: true,
      notCollected: false,
    },
  }
);