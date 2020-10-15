import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Task from "./Components/Task";
import tasksArray from "./Components/tasks";
import Form from "./Components/Form";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: tasksArray
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id, newTask) {
        id || id === 0 ? this.setState(prevState => {
                const updatedTasks = prevState.tasks.map((task, index) => {
                    if (task.id === id) {
                        task.completed = !task.completed;
                    }
                    return task;
                });
                return {
                    tasks: updatedTasks
                }
            })
            : this.setState(prevState => {
                const updatedTasks = prevState.tasks;
                updatedTasks.push({id: this.state.tasks.length, title: newTask, completed: false});
                return {
                    tasks: updatedTasks
                }
            })
    }

    genTasks() {
        return tasksArray.map(task => <Task key={task.id} task={task} handleChange={this.handleChange}/>);
    }

    

    render() {
        return (
            <div>
                <Form handleChange={this.handleChange}/>
                {this.genTasks()}
            </div>
        );
    }
}

export default App;
