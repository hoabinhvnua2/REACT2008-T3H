import React, { Component } from 'react';
import './component.scss';

class ShowList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            nameEdit: '',
            description: ''
        }
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

    handleClickShowEditTask = () => {
        this.setState({
            show: true
        })
    }

    handleClickCloseEditTask = () => {
        this.setState({
            nameTask: '',
            description: '',
            show: false
        })
    }

    handleChangeNameTask = (event) => {
        this.setState({
            nameEdit: event.target.value
        })
    } 

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }


    render() {
        const listTask = this.props.listTask;
        return(
            <div className="showlist-container">
                {listTask.length > 0 ?
                <table className="table table-bordered ml-3 todo-table">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {listTask.map( (value, index) => {
                         return(
                            <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.name}</td>
                            <td>{value.description}</td>
                            <td>{value.isComplete ? 
                            <button type="button" 
                            className="btn btn-primary btn-sm" 
                            onClick={() => {this.props.complete(index)}}>Complete</button> : 
                            <button type="button" 
                            className="btn btn-danger btn-sm"
                            onClick={() => {this.props.complete(index)}}>Let do it</button>}</td>
                            <td><button type="button" 
                            className="btn btn-secondary btn-sm"
                            onClick={() => {this.props.deleteTask(index)}}>Delete</button>
                            <button type="button" className="btn btn-primary btn-sm ml-2" data-toggle="modal" data-target="#exampleModal" onClick={this.handleClickShowEditTask}>Edit</button>
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
                                                <button type="submit" className="btn btn-primary">Edit</button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClickCloseEditTask}>Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            </tr>
                         )
                     })}
                </tbody>
            </table> :
            <p>Chưa có task nào</p>}
            </div>
        )
    }

}

export default ShowList;