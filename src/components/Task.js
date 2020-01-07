import React from 'react';
//import AddTask from 'react';
//const uuidv4 = require('uuid/v4');
class Task extends React.Component {

    deleteTask = () => {
        //this.props.deleteTaskFunc(this.props.task.taskId);
        this.props.deleteTaskFunc(this.props.task.Id);
    }

    completeTask = () => {
        //this.props.completeTaskFunc(this.props.task.taskId)
        this.props.completeTaskFunc(this.props.task.Id)
    }

    render() {
        const completed = this.props.task.completed;
        return (
            <div className="row taskrow">
                {completed ? (

                    <div className="col-12 col-md-6  completedTask">

                        {this.props.task.taskDescription}
                    </div>
                ) : (
                    <div className="col-12 col-md-6">
                        {this.props.task.description}
                     </div>
                )}

                {/* 
                {!completed &&
                 <div className = "col-12 col-md-6 completedTask">
        {this.props.task.taskDescription}
                  </div>
            }
                 {!completed &&
                     <div className="col-12 col-md-6 ">
                         {this.props.task.taskDescription}
                     </div> 
                 } */}

                <div className="col-6 col-md-3">

                    <button type="button" className="btn btn-primary btn btn-sm m-1" onClick={this.completeTask}>
                        Done
                            </button>
                </div>
                <div>
                    <div className="col-6 col-md-3">

                        <button type="button" className="btn btn-danger btn btn-sm m-1" onClick={this.deleteTask}>
                            Delete
                    </button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Task;



