import React, { Component } from 'react';
import { Box, Button, Grid, TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import * as modalActions from '../../actions/modal';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { classes, modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField
              label="Tiêu đề"
              variant="standard"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
        </Grid>

        <Grid item md={12}>
          <TextField
            label="Mô tả"
            multiline
            variant="standard"
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Button variant="contained" onClick={hideModal}>
              Huỷ bỏ
            </Button>
            <Box mr={1}>
              <Button variant="contained" color="primary">
                Lưu lại
              </Button>
            </Box>
          </Box>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapActionsToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapActionsToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
