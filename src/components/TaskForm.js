import React, {Component} from 'react';

// here we create the class and export it all in one line.
export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }
  formAction = (e) => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  }

  listeningForm = (e) => {
    console.log(e.target.name, e.target.value);
    //this is the name we gave to the input in the form a way for react to know the input where the data is comming
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render (){
    return (
      <form onSubmit ={this.formAction}>
          <input type='text' name='title' placeholder='Write a task' onChange={this.listeningForm} value={this.state.title}/>
          <br />
          <br />
          <textarea name='description' placeholder='Write the description' onChange={this.listeningForm} value={this.state.description}/>
          <br />
          <input type='submit' />
      </form>
    )
  }

}