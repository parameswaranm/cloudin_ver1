const Reducer = (state, action) => {
  console.log('state, action', state, action)
  switch (action.type) {
    case 'SET_POSTS':       
      return {
        ...state,
        regions: action.payload,
      };
    case 'ADD_POST':
      return {
        ...state,
        regions: state.regions.concat(action.payload),
      };
    case 'REMOVE_POST':
      return {
        ...state,
        regions: state.regions.filter((region) => region.id !== action.payload),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
