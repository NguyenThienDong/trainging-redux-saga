import { Button, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "../Taskboard/styles";

class Taskboard extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div>
        <Button variant='contained' color='primary'>
          Material UI
        </Button>
        <div className={classes.taskboard}>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>NodeJs</div>
          <div className={classes.shape}>VueJs</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
