import React from 'react';
import './App.css';
import Header from './components/Header';
//import Intro from './components/Intro';
//import Task from './components/Task';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
const uuidv4 = require('uuid/v4');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: uuidv4(), taskDescription: "Distribution of catalogue", completed: false },
        { id: uuidv4(), taskDescription: "Collection of catalogue", completed: true },
        { id: uuidv4(), taskDescription: "Update and submit order", completed: false },
        { id: uuidv4(), taskDescription: "prepare individual order", completed: true },
        { id: uuidv4(), taskDescription: "Pay the invoice", completed: false }
      ]
    };
  }
  addTaskToList = (task) => {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tasks: tasks });
  }
  deleteTask = (taskId) => {
    //alert(`app will delete task:  ${taskId}`);
    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    this.setState({ tasks: filteredTasks });
  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <TaskCounter count={this.state.tasks.length} />
        <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} id={this.Id} />
      </div>

    );
  }
}
export default App;
