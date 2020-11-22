import React, { Component } from 'react';
import EditTask from './EditTask';
import './component.scss';

class ShowList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editTask: {},
        }
    }

    handleEditTask = (task, index) => {
        this.props.editList(task, index);
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
                            <td className="d-flex"><button type="button" 
                            className="btn btn-secondary btn-sm"
                            onClick={() => {this.props.deleteTask(index)}}>Delete</button>
                            <EditTask taskEdit={value} indexEdit={index} editTask={this.handleEditTask}/>
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