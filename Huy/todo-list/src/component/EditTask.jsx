import React, { Component } from 'react';

class EditTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameEdit: '',
            description: '',
            show: false,
        }
    }

    handleClickShowEditTask = () => {
        this.setState({
            nameEdit: this.props.taskEdit.name,
            description: this.props.taskEdit.description,
            show: true
        })
    }

    handleClickCloseEditTask = () => {
        this.setState({
            nameEdit: '',
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

    handleChangeEditName = (event) => {
        this.setState({
            nameEdit: event.target.value
        })
    } 

    handleChangeEditDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event) => {
        let task = {
            nameEdit: this.state.nameEdit,
            description: this.state.description,
            isComplete: false
        }
        this.props.editTask(task, this.props.indexEdit);
        this.setState({
            nameEdit: '',
            description: ''
        })
    }

    render() {
        return(
            <div className="form-container" onSubmit={this.handleSubmit}>
                <button type="button" className="btn btn-primary btn-sm ml-2" data-toggle="modal" data-target="#exampleModal" onClick={this.handleClickShowEditTask}>
                    Edit
                </button>

                <div className="modal" id="exampleModal" tabIndex="-1" style={this.myStyle()}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">Edit Task</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClickCloseEditTask}>
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
                                    value={this.state.nameEdit}
                                    onChange={this.handleChangeEditName}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <input type="text" 
                                    className="form-control form-control-sm" 
                                    id="exampleInputPassword1" 
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChangeEditDescription}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClickCloseEditTask}>Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EditTask;