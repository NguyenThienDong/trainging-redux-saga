/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  withStyles,
  Fab,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Card className={classes.card} key={task.id}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item xs={8}>
              <Typography variant="h4">{task.title}</Typography>
              <p>{task.description}</p>
            </Grid>
            <Grid item xs={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={onClickEdit}
          >
            <EditIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            onClick={onClickDelete}
          >
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
