import { Button, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

class App extends Component {
  render() {
    console.log(this.props)
    let { classes } = this.props;
    return (
      <div>
        <h1>Redux-Saga</h1>
        <Button variant='contained' color='primary' >Material UI</Button> 
        <div className={classes.box}>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>NodeJs</div>
          <div className={classes.shape}>VueJs</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);