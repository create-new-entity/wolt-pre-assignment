
const sortOrderReducer = (state = '', action) => {
  switch(action.type){
    case 'INITIALIZE':
      return 'ascending';
    default:
      return state;
  }
};

export default sortOrderReducer;