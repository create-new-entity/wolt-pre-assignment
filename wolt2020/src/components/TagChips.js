import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import uuid from 'uuid';

import TagChip from './TagChip';
import services from './../services/restaurants';

const useStyles = makeStyles(theme => ({
  tagsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10
  }
}));

const TagChips = React.memo(
  (props) => {
    let tags;
    
    tags = useRef(services.getTags()).current;
    const classes = useStyles();
    return (
      <Box className={classes.tagsBox}>
        {
          tags.map((tag) => {
            return <TagChip
                    key={uuid.v4()}
                    tag={tag}
                  />;
          })
        }
      </Box>
    );
  }
);

export default TagChips;