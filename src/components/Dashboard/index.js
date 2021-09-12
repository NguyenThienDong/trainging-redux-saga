import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import * as uiActions from '../../actions/ui';

class Dashboard extends Component {
  handleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { classes, children, showSidebar, name } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          onToggleSidebar={this.handleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            className={classes.sidebar}
            showSidebar={showSidebar}
            onToggleSidebar={this.handleSidebar}
          />
          <div
            className={cn(classes.wrapperContent, {
              [classes.shiftLeft]: showSidebar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  children: PropTypes.object,
  showSidebar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  showSidebar: state.ui.showSidebar,
});

const mapActionsToProps = (dispatch) => ({
  uiActionCreators: bindActionCreators(uiActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
