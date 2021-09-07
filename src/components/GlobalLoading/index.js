import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoadingIcon from '../../assets/images/loading.gif';
import styles from './styles';

class GlobalLoading extends Component {
  render() {
    let xhtml = null;
    const { classes, showLoading } = this.props;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  showLoading: state.ui.showLoading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
