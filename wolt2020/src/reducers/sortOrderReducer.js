
export const changeSortOrderAction = ({ currentOrder, restaurants }) => {
  let newOrder = (currentOrder === 'ascending') ? 'descending' : 'ascending';
  return {
    type: 'CHANGE_ORDER',
    data: {
      newOrder,
      restaurants: [...restaurants].reverse()
    }
  }
};

const sortOrderReducer = (state = '', action) => {
  switch(action.type){
    case 'INITIALIZE':
      return 'ascending';
    case 'CHANGE_ORDER':
      return action.data.newOrder;
    default:
      return state;
  }
};

export default sortOrderReducer;