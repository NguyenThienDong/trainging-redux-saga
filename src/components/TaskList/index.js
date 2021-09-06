import React, { Component } from 'react';
import { Box, Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import TaskItem from '../TaskItem';
import PropTypes from 'prop-types';

class TaskList extends Component {
    render() {
        const { classes, tasks, status } = this.props;
        return (
            <Grid item xs={12} md={4} key={status.value}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} status={status} />
                ))}
            </Grid>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.func.isRequired,
    tasks: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
};

export default withStyles(styles)(TaskList);
