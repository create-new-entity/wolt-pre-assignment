import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import uuid from 'uuid';

import TagChip from './TagChip';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: 50
  },
  tagsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 130
  },
  navBar: {
    width: window.innerWidth + 16,
    height: 100,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    background: 'rgba(229, 231, 233, 0.6)',
    textAlign: 'center'
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