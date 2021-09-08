import { Modal, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import * as modalActions from '../../actions/modal';

class CommanModal extends Component {
  render() {
    const { open, classes, title, component, modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <ClearIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

CommanModal.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  title: PropTypes.string,
  component: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};
const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});
const mapActionsToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withStyles(styles), withConnect)(CommanModal);
