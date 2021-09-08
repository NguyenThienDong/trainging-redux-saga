import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
import theme from '../../commons/Theme';
import Taskboard from '../Taskboard';
import styles from './styles';
import store from '../../redux/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalLoading />
          <Taskboard />
          <Modal />
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
