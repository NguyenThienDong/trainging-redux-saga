/* eslint-disable no-shadow */
import { Button, Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import * as taskActions from '../../actions/task';
import styles from './styles';
import SearchBox from '../../components/SearchBox';

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // componentDidMount() {
  //   const { taskActionCreators } = this.props;
  //   const { fetchListTaskRequest } = taskActionCreators;
  //   fetchListTaskRequest();
  // }

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  searchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} handleClose={this.handleClose} />;
    return xhtml;
  }

  renderBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList key={status.value} tasks={taskFilter} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  render() {
    return (
      <div className="taskBoard">
        <Button variant="contained" color="primary" onClick={this.loadData}>
          Load Data
        </Button>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <AddIcon /> Thêm công việc
        </Button>
        {this.searchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => ({
  listTask: state.task.listTask,
});
const mapActionsToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapActionsToProps)(Taskboard),
);
