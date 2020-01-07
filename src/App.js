import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

//import Axios from 'axios';
const uuidv4 = require('uuid/v4');
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // { id: uuidv4(), taskDescription: "Distribution of catalogue", completed: true, dateCreated: "2019-11-25" },
        // { id: uuidv4(), taskDescription: "Collection of catalogue", completed: true, dateCreated: "2019-11-23" },
        // { id: uuidv4(), taskDescription: "Update and submit order", completed: true, dateCreated: "2019-11-20" },
        // { id: uuidv4(), taskDescription: "prepare individual order", completed: false, dateCreated: "2019-11-10" },
        // { id: uuidv4(), taskDescription: "Pay the invoice", completed: false, dateCreated: "2019-11-08" },
        // { id: uuidv4(), taskDescription: "check calender dates", completed: false, dateCreated: "2019-11-05" }
      ]
    };
  }

  componentDidMount() {
    axios.get('https://3tx8f9ktz0.execute-api.eu-west-2.amazonaws.com/dev/tasks')

      .then((response) => {
        // handle success
        this.setState({ tasks: response.data.tasks });
        //console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  addTaskToList = (task) => {

    axios.post('https://3tx8f9ktz0.execute-api.eu-west-2.amazonaws.com/dev/tasks', task)
      .then((response) => {
        let tasks = this.state.tasks;
        task.taskId = response.taskId;

        //task.taskDescription = response.taskDescription;
        //console.log(response);
        tasks.push(task);
        this.setState({ tasks: tasks });
        console.log(task)
      });
  }
 
  // deleteTask = (taskId) => {
  //       axios.delete(
  //          'https://3tx8f9ktz0.execute-api.eu-west-2.amazonaws.com/dev/tasks/{taskId}')
           
  //         .then((response) => {
  //           const filteredTask = this.state.tasks.filter(item => {
  //             // eslint-disable-next-line no-undef
  //             return task.taskId !== taskId;
  //           });
  //           this.setState({
  //             tasks: filteredTask
  //           })
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }


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
     
       <Footer/>

     </div>
    )
  }
}
export default App;



