import { Button, Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "../Taskboard/styles";
import AddIcon from "@material-ui/icons/Add";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play football",
    description: "Play in evening",
    status: 2,
  },
  {
    id: 3,
    title: "Play game",
    description: "Play with my friend",
    status: 1,
  },
];

class Taskboard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          var taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList key={status.value} tasks={taskFilter} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    return (
      <div className='taskBoard'>
        <Button variant='contained' color='primary'>
          <AddIcon /> Thêm công việc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
