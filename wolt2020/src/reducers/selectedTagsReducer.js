

const selectedTagsReducer = (state = [], action) => {
  switch(action.type){
    case 'INITIALIZE':
      return [];
    default:
      return state;
  }
};


export default selectedTagsReducer;