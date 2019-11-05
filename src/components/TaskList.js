     
import React from "react";
import Task from "./Task";
class TaskList extends React.Component {
 render() {
   return (
     <div>
       {this.props.tasks.map(function(task, index) {
        return   <Task task={task} key={index} /*id={this.id} *//>;
          return <Task deleteTaskFunc={this.props.deleteTaskFunc} task={task.id} key={index.id} />;

       })}
     </div>
   );
 }
}
export default TaskList;