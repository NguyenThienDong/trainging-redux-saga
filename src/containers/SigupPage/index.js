import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

class SigupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.sigup}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <form>
                <div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Đăng ký tài khoản
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  type="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="Tôi đã đọc chính sách và đồng ý điều khoản"
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Đăng ký
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button>Đã có tài khoản?</Button>
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

SigupPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SigupPage);
