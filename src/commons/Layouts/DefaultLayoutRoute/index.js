import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => <YourComponent {...routeProps} />}
      />
    );
  }
}

DefaultLayoutRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default DefaultLayoutRoute;
