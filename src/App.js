import React, {Component} from 'react'; // a different way to import the component  
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'; // a component to simulate routes in react
import './App.css';
import tasks from './data/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

//console.log(task) just to check if we have the data
class App extends Component {
  constructor(props){
    super(props);
    this.state =  {tasks: tasks };
  }

  addTask = (title, description) => {
   const newTask =   {
    id: this.state.tasks.length +1,
    name: title,
    description: description,
    done: false
    }
    // this is how we add a new task, we modify the state of task, its like an append
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) =>{
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }

  markAsCompleted = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    })

    this.setState({tasks: newTasks})
  }

  render(){
    return (
      <div>
      <Router>
        <Link to="/">Home</Link><br />
        <Link to="/posts">Posts</Link><br />
        <Route exact path='/' render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} markAsCompleted={this.markAsCompleted}/>
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts}/>
      </Router>
      </div>
    )
  }
}

export default App;
