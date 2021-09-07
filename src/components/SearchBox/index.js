import { TextField, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.searchBox} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          onChange={handleChange}
          autoComplete="off"
          margin="normal"
          placeholder="Nhập từ khóa..."
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
