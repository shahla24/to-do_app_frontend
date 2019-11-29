import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
const uuidv4 = require('uuid/v4');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: uuidv4(), taskDescription: "Distribution of catalogue", completed: false, dateCreated: "2019-11-25" },
        { id: uuidv4(), taskDescription: "Collection of catalogue", completed: true, dateCreated: "2019-11-23" },
        { id: uuidv4(), taskDescription: "Update and submit order", completed: false, dateCreated: "2019-11-20" },
        { id: uuidv4(), taskDescription: "prepare individual order", completed: true, dateCreated: "2019-11-10" },
        { id: uuidv4(), taskDescription: "Pay the invoice", completed: false, dateCreated: "2019-11-08" },
        { id: uuidv4(), taskDescription: "check calender dates", completed: false, dateCreated: "2019-11-05" }
      ]
    };
  }
  addTaskToList = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);
    this.setState({ tasks: tasks });
  }
  deleteTask = (taskId) => {

    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    this.setState({ tasks: filteredTasks });
  }


  completeTask = (taskId) => {
    const completeTask = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = true
      }
      return task;
    });
    this.setState({ tasks: completeTask })
  }
  render() {

    return (
      <div className="App">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <hr />
        <TaskCounter count={this.state.tasks.length} />
        <hr />
        <TaskList tasks={this.state.tasks} completeTaskFunc={this.completeTask} deleteTaskFunc={this.deleteTask} />
        <hr />
      </div>
    )
  }
}
export default App;



