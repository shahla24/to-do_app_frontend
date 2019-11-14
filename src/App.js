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
        { id: uuidv4(), taskDescription: "Distribution of catalogue", completed: false },
        { id: uuidv4(), taskDescription: "Collection of catalogue", completed: true },
        { id: uuidv4(), taskDescription: "Update and submit order", completed: false },
        { id: uuidv4(), taskDescription: "prepare individual order", completed: true },
        { id: uuidv4(), taskDescription: "Pay the invoice", completed: false },
        { id: uuidv4(), taskDescription: "check calender dates", completed: false }
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
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    });
    // const incompleteTasks = this.state.tasks.filter(task => {
    //   return task.completed ? false : true;
    // });

    return (
      <div className="container">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <TaskCounter count={this.state.tasks.length} />

        {completedTasks.map(task => {
          return <TaskList tasks={this.state.tasks} completeTaskFunc={this.completeTask} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} />
        })
        }
      </div>

      //  <div className="col-12 col-md-6 id=incompleteTaskContainer"> 
      //   {incompleteTasks.map(task => { 
      //    return <TaskList tasks={this.state.tasks} completeTaskFunc={this.completeTask} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} />
      //  })
      //   } 
      /* //<div className="col-12 col-md-6 id=incompleteTaskContainer"> 
     //  {incompleteTasks.map(task => { */
      /* return <TaskList tasks={this.state.tasks} completeTaskFunc={this.completeTask} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} />
   //  } */


    )
  }
}
export default App;



