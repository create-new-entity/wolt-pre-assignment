import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';

const TagChip = ({ tag, onSelect, onDeselect }) => {
  const [selected, setSelected] = useState(false);

  const onClickHandler = () => {
    if(!selected){
      setSelected(true);
      // onSelect(tag);
    }
    else {
      setSelected(false);
      // onDeselect(tag);
    }
  }
  return <Chip
            color={ selected ? "secondary" : "primary" }
            label={tag}
            style={{cursor: 'pointer'}}
            onClick={onClickHandler}
          />;
};

export default TagChip;