import { Box, Button, Card, CardActions, CardContent, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "../Taskboard/styles";
import AddIcon from "@material-ui/icons/Add";
import { STATUSES } from "../../constants";

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
    let { classes} = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          var taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <Grid item xs={12} md={4} key={status.value}>
              <Box mt={2} mb={2}>
                <div className={classes.status} >{status.label}</div>
              </Box>
              {taskFilter.map((task, index) => (
                <Card className={classes.card} key={task.id}>
                  <CardContent>
                    <Grid container justify='space-between' >
                      <Grid item xs={8}>
                        <Typography component='h2'>{task.title}</Typography>
                      </Grid>
                      <Grid item xs={4}>{status.label}</Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
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
