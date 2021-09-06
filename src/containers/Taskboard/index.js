import { Button, Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import STATUSES from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title: 'Read book',
        description: 'Read material ui book',
        status: 0,
    },
    {
        id: 2,
        title: 'Play football',
        description: 'Play in evening',
        status: 2,
    },
    {
        id: 3,
        title: 'Play game',
        description: 'Play with my friend',
        status: 1,
    },
];

class Taskboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

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

    renderForm() {
        const { open } = this.state;
        let xhtml = null;
        xhtml = <TaskForm open={open} handleClose={this.handleClose} />;
        return xhtml;
    }

    renderBoard = () => {
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
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    }

    render() {
        return (
            <div className='taskBoard'>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={this.openForm}
                >
                    <AddIcon /> Thêm công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);
