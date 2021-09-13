import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <form>
                <div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Đăng nhập để tiếp tục
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="email"
                  type="email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="password"
                  type="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Đăng nhập
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/sigup">
                    <Button>Đăng ký tài khoản mới</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
