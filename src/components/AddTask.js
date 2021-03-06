
import React from "react";
const uuidv4 = require('uuid/v4')
class AddTask extends React.Component {
  state = {
    taskDescription: ""
  }
  addTask = () => {
    const task = {
      id: uuidv4(),
      taskDescription: this.state.taskDescription,
      completed: false
    }
    this.props.newTask(task);
    this.setState({ taskDescription: "" });
  }
  taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;
    taskDescription = event.target.value;
    this.setState({ taskDescription });

  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-10">
          <input
            className="form-control"
            type="text"
            id="addTask"
            placeholder="What do you want to do..."
            value={this.state.taskDescription}
            onChange={this.taskDescriptionChanged}
          />
        </div>
        <div className="col-12 col-md-2">
          <button type="button" className="btn btn-success" onClick={this.addTask}>
            Add
         </button>
        </div>
      </div>
    );
  }
}
export default AddTask;


// background-image: url("https://st3.depositphotos.com/4395427/17465/i/1600/depositphotos_174656722-stock-photo-grass-flower-field-spring-background.jpg"); 