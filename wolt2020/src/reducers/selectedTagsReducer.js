export const selectTagAction = (tag) => {
  return {
    type: 'TAG_SELCTED',
    data: tag
  };
};

export const deselectTagAction = (tag) => {
  return {
    type: 'TAG_DESELECTED',
    data: {
      tag
    }
  };
};


const selectedTagsReducer = (state = [], action) => {
  switch(action.type){
    case 'INITIALIZE':
      return [];
    case 'TAG_SELCTED':
      return state.concat(action.data);
    case 'TAG_DESELECTED':
      return state.filter((tag) => {
        return tag !== action.data.tag;
      });
    default:
      return state;
  }
};


export default selectedTagsReducer;