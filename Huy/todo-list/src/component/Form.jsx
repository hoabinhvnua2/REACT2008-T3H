import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameTask: '',
            description: '',
            show: false,
        }
    }

    handleClickShowAddTask = () => {
        this.setState({
            show: true
        })
    }

    handleClickCloseAddTask = () => {
        this.setState({
            nameTask: '',
            description: '',
            show: false
        })
    }

    myStyle = () => {
        if(this.state.show === true) {
            return {
                display: 'block'
            }
        }
        else {
            return {
                display: 'none'
            }
        }
    }

    handleChangeNameTask = (event) => {
        this.setState({
            nameTask: event.target.value
        })
    } 

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event) => {
        let task = {
            name: this.state.nameTask,
            description: this.state.description,
            isComplete: false
        }
        this.props.addList(task);
        this.setState({
            nameTask: '',
            description: ''
        })
    }

    render() {
        return(
            <div className="form-container" onSubmit={this.handleSubmit}>
                <button type="button" className="btn btn-primary ml-3 mt-3" data-toggle="modal" data-target="#exampleModal" onClick={this.handleClickShowAddTask}>
                    Add Task
                </button>

                <div className="modal" id="exampleModal" tabIndex="-1" style={this.myStyle()}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">Add Task</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClickCloseAddTask}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name Task</label>
                                    <input 
                                    type="text" 
                                    className="form-control form-control-sm" 
                                    id="exampleInputEmail1" 
                                    name="nameTask"
                                    value={this.state.nameTask}
                                    onChange={this.handleChangeNameTask}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <input type="text" 
                                    className="form-control form-control-sm" 
                                    id="exampleInputPassword1" 
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChangeDescription}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClickCloseAddTask}>Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Form;