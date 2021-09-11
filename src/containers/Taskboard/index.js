/* eslint-disable no-shadow */
import { Box, Button, Grid, withStyles } from '@material-ui/core';
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
import TaskForm from '../TaskForm';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  openForm = () => {
    const { modalActionsCreators, taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
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

  handleEditTask = (task) => {
    const { taskActionCreators, modalActionsCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(task);
    const { showModal, changeModalTitle, changeModalContent } =
      modalActionsCreators;
    showModal();
    changeModalTitle('Cập nhật công việc');
    changeModalContent(<TaskForm />);
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  showModalDelete = (task) => {
    const { modalActionsCreators, classes } = this.props;
    const { showModal, changeModalTitle, changeModalContent, hideModal } =
      modalActionsCreators;
    showModal();
    changeModalTitle('Xoá công việc');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div>
          Bạn có chắc chắn muốn xóa{' '}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" color="secondary" onClick={hideModal}>
              Hủy bỏ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.onDeleteTask(task)}
            >
              Xóa bỏ
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };

  onDeleteTask = (task) => {
    const { id } = task;
    const { taskActionCreators, modalActionsCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    const { hideModal } = modalActionsCreators;
    deleteTask(id);
    hideModal();
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
            <TaskList
              key={status.value}
              tasks={taskFilter}
              status={status}
              onClickEdit={this.handleEditTask}
              onClickDelete={this.showModalDelete}
            />
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
    setTaskEditing: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalActionsCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  listTask: PropTypes.array,
  classes: PropTypes.object,
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
