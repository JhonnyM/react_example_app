import React, {Component} from 'react';
import Task from './Task'
import PropTypes from 'prop-types';

class Tasks extends Component {
  render(){
    return(
      <div>
        <h1>Tasks:</h1>
        {this.props.tasks.map(task => 
          <Task  key={task.id }task={task} deleteTask={this.props.deleteTask} markAsCompleted={this.props.markAsCompleted}/>
        )}
      </div>
    )
  }
}
// this is how we specify the type of object that we want to have.
// but here we specify that we want a array, thats why is in plural.
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export  default Tasks;