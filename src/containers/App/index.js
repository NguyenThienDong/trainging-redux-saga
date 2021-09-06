import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import theme from '../../commons/Theme';
import Taskboard from '../Taskboard';
import styles from './styles';
import store from '../../redux/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
