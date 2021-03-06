/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { Box, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item xs={12} md={4} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            status={status}
            onClickEdit={() => onClickEdit(task)}
            onClickDelete={() => onClickDelete(task)}
          />
        ))}
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  status: PropTypes.object.isRequired,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskList);
