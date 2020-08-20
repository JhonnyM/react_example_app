import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component{

  styleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'grey' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none',
    }
  }

  render(){
    const {task} = this.props; // with this line we extract the task from the props and we can use it later in the code.
    return(
      <div  style={this.styleCompleted()} id={task.id} >
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <input type="checkbox" onClick={this.props.markAsCompleted.bind(this, task.id)}/>
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button> 
      </div>
    )
  }
}

// this is how we specify the type of object that we want to have.
Task.propTypes = {
  task: PropTypes.object.isRequired
}


const btnDelete = {
  fontSize: "10px",
  background: "#fffaa",
  color: '#00000',
  padding: "2px 7px",
}

export default Task;