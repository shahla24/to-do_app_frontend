
import React from "react";

class TaskCounter extends React.Component {
  render() {
    return (
      <div className="row d-none d-md-block">
        <div className="col">
          <h6>You have {this.props.count} tasks remaining!
          </h6>
            </div>
      </div>
    );
  }
}

export default TaskCounter;
