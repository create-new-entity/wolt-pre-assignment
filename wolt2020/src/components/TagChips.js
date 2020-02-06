import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import uuid from 'uuid';

import TagChip from './TagChip';

const useStyles = makeStyles(theme => ({
  tagsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 40
  }
}));

const TagChips = ({ tags, onSelect, onDeselect }) => {
  const classes = useStyles();

  return (
    <Box className={classes.tagsBox}>
      {
        tags.map((tag) => {
          return <TagChip
                  key={uuid.v4()}
                  tag={tag}
                  onSelect={onSelect}
                  onDeselect={onDeselect}
                />;
        })
      }
    </Box>
  );
};

export default TagChips;