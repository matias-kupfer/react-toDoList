import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="form">
                <input type="text" name="newTask" value={this.state.newTask} placeholder="Clean the moon..."
                       onChange={this.handleChange}/>
                <br/>
                <button onClick={() => this.props.handleChange(null, this.state.newTask)}>Add task</button>
            </div>
        )
    }
}

export default Form;
