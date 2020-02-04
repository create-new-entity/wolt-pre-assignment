
const buttonTextReducer = (state = '', action) => {
  switch(action.type){
    case 'INITIALIZE':
      return 'Sort Descending';
    default:
      return state;
  }
};

export default buttonTextReducer;