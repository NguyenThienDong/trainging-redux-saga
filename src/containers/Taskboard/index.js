/* eslint-disable no-shadow */
import { Button, Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import styles from './styles';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../../components/TaskForm';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  openForm = () => {
    const { modalActionsCreators } = this.props;
    const { showModal, changeModalTitle, changeModalContent } =
      modalActionsCreators;
    showModal();
    changeModalTitle('Thêm công việc');
    changeModalContent(<TaskForm />);
  };

  closeForm = () => {
    const { modalActionsCreators } = this.props;
    const { hideModal } = modalActionsCreators;
    hideModal();
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
      </div>
    );
  }
}

Taskboard.propTypes = {
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    fetchListTaskRequest: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  modalActionsCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => ({
  listTask: state.task.listTask,
});
const mapActionsToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
  modalActionsCreators: bindActionCreators(modalActions, dispatch),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapActionsToProps)(Taskboard),
);
