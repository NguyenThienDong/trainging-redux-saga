import React, { Component } from 'react';
import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
import theme from '../../commons/Theme';
import styles from './styles';
import store from '../../redux/index';
import { ADMIN_ROUTES, ROUTES } from '../../constants';
import AdminLayoutRoute from '../../commons/Layouts/AdminLayoutRoute';
import DefaultLayoutRoute from '../../commons/Layouts/DefaultLayoutRoute';

class App extends Component {
  renderAdminRouters() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => (
      <AdminLayoutRoute
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
        name={route.name}
      />
    ));
    return xhtml;
  }

  renderDefaultRouters() {
    let xhtml = null;
    xhtml = ROUTES.map((route) => (
      <DefaultLayoutRoute
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
        name={route.name}
      />
    ));
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalLoading />
            <ToastContainer />
            <Modal />
            <Switch>
              {this.renderAdminRouters()}
              {this.renderDefaultRouters()}
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
