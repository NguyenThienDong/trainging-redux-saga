import React, { Component } from "react";
import { Box, Grid,  withStyles } from "@material-ui/core";
import styles from "./styles";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    let { classes, tasks, status} = this.props;
    return (
      <Grid item xs={12} md={4} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} status={status} />
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
