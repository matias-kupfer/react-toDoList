import React from "react";

class Task extends React.Component {
    render() {
        const color = !this.props.task.completed ? 'red' : 'green';
        const decoration = this.props.task.completed ? 'line-through' : 'none';
        return (
            <div className="task">
                <input type="checkbox" checked={this.props.task.completed}
                       onChange={() => this.props.handleChange(this.props.task.id, null)}/>
                <span className="task-text"
                    style={{color: color, fontSize: '1.5em', textDecoration: decoration}}>
                    {this.props.task.id} {this.props.task.title}</span>
            </div>
        )
    }

}

export default Task;
