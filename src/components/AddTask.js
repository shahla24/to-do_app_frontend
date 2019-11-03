import React from "react";
const uuidv4 = require('uuid/v4');

class AddTask extends React.Component {
    state = {
        taskDescription: ""
    }
    addTask() {
        let task = {
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
                        placeholder="What do you want to do..."

                        value={this.state.taskDescription}
                        onChange={this.taskDescriptionChanged} />
                </div>
                <div className="col-12 col-md-2">
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        )
    }
}
export default AddTask;

// import React from 'react';
// class AddTask extends React.Component {
//     addTask = () => {
//         const task = {
//             id: 1,
//             taskDescription: this.state.taskDescription,
//             completed: false
//         }

// this.Props.newTask(task);
// this.setstate({taskDescription: ""});
// export  default AddTask;
// import React from "react";

// class AddTask extends React.Component {
//     render() {
//         return (
//             <div className="row">
//                 <div className="col-12 col-md-10">
//                     <input className="form-control" type="text" placeholder="What do you want to do..." />
//                 </div>
//                 <div className="col-12 col-md-2">
//                     <button type="button" className="btn btn-success">Add</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default AddTask;
