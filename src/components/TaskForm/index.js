import React, { Component } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    withStyles,
} from "@material-ui/core";
import styles from './styles';

class TaskForm extends Component {
  render() {
    let { open, handleClose} = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {"Thêm mới công việc."}
        </DialogTitle>
        <DialogContent>
          <TextField id='standard-basic' label='Standard' variant='standard' />
          <TextField
            id='standard-textarea'
            label='Multiline Placeholder'
            placeholder='Placeholder'
            multiline
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
