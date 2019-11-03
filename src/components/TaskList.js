import React from "react";
import Task from "./Task";

class TaskList extends React.Component {

  render() {
    // const tasks = [
    //   {
    //     id: 1,
    //     taskDescription: "Distribution of catalogue",
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     taskDescription: "Collection of catalogue",
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     taskDescription: "Update and submit order",
    //     completed: true
    //   },
    //   {
    //     id: 4,
    //     taskDescription: "Prepare individual order",
    //     completed: true
    //   },
    //   {
    //     id: 5,
    //     taskdescription: "Deliver and collect money",
    //   }
    // ];
    return (
      <div>

        {this.props.tasks.map((task, index) => {
          return <Task deleteTaskFunc={this.props.deleteTaskFunc} task={task} key={index} />;
        })
        }
      </div>
    );
  }
}

export default TaskList;