const initialState = {
    inputValue: '',
    selectValue: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INPUT_VALUE':
        return {
          ...state,
          inputValue: action.payload,
        };
      case 'SET_SELECT_VALUE':
        return {
          ...state,
          selectValue: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  