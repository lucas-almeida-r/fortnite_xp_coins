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
  {}
);