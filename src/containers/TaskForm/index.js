import React, { Component } from 'react';
import { Box, Button, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import styles from './styles';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActionCreators } = this.props;
    const { addTask } = taskActionCreators;
    const { title, description } = data;
    addTask(title, description);
  };

  render() {
    const { classes, modalActionCreators, handleSubmit, invalid, submitting } =
      this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapStateToProps = null;

const mapActionsToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapActionsToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
