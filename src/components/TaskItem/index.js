import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  withStyles,
  Fab,
} from "@material-ui/core";
import styles from "./styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskItem extends Component {
  render() {
    let { classes, task, status } = this.props;
    return (
      <Card className={classes.card} key={task.id}>
        <CardContent>
          <Grid container justify='space-between'>
            <Grid item xs={8}>
              <Typography variant='h4'>{task.title}</Typography>
              <p>{task.description}</p>
            </Grid>
            <Grid item xs={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color='secondary' aria-label='edit' size='small'>
            <EditIcon />
          </Fab>
          <Fab color='primary' aria-label='edit' size='small'>
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
