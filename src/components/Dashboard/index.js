import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header />
        <div className={classes.wrapper}>
          <Sidebar className={classes.sidebar} />
          <div className={classes.wrapperContent}>{children}</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object,
};

export default withStyles(styles)(Dashboard);
