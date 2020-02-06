import React, { useState } from 'react';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';

import {
  selectTagAction,
  deselectTagAction
} from './../reducers/selectedTagsReducer';

import {
  updateRestaurantsAfterTagInteraction
} from './../reducers/restaurantsReducer';

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    selectedTags: state.selectedTags,
    sortOrder: state.sortOrder
  };
};

const mapDispatchToProps = {
  selectTagAction,
  deselectTagAction,
  updateRestaurantsAfterTagInteraction
};

const TagChip = (props) => {
  const [selected, setSelected] = useState(props.selectedTags.indexOf(props.tag) !== -1);

  const onClickHandler = () => {
    if(!selected){
      setSelected(true);
      props.selectTagAction(props.tag);
      props.updateRestaurantsAfterTagInteraction(props.selectedTags.concat(props.tag), props.sortOrder);
    }
    else {
      setSelected(false);
      props.deselectTagAction(props.tag);
      props.updateRestaurantsAfterTagInteraction(props.selectedTags.filter((tag) => tag !== props.tag), props.sortOrder);
    }
  }
  return <Chip
            color={ selected ? 'secondary' : 'primary' }
            label={props.tag}
            style={{cursor: 'pointer'}}
            onClick={onClickHandler}
          />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TagChip);