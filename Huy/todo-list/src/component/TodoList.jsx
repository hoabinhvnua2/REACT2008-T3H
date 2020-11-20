import React, { Component } from 'react';
import ShowList from './ShowList';
import './component.scss';
import Form from './Form';

let listLocalstorage = JSON.parse(localStorage.getItem('list-task'));
let list;
if(listLocalstorage) {
    list = listLocalstorage;
}
else{
    list = [];
}

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listTask: list
        }
    }

    handleAddList = (task) => {
        list.push(task);
        this.setState({
            listTask: list
        });
        localStorage.setItem('list-task', JSON.stringify(this.state.listTask));
    }

    handleComplete = (index) => {
        let listTask = this.state.listTask;
        let value;
        for(let i = 0; i < listTask.length; i++) {
            if(i === index) {
                value = listTask[i];
                break;
            }
        }
        let checkComplete = value.isComplete;
        value.isComplete = !checkComplete;
        let listCheckComplete = [...listTask.slice(0, index), value, ...listTask.slice(index + 1)];
        console.log(listCheckComplete);
        this.setState({
            listTask: listCheckComplete
        })
        localStorage.setItem('list-task', JSON.stringify(this.state.listTask));
    }

    render() {
        return(
            <div className="todo-container">
                <Form addList={this.handleAddList} />
                <ShowList listTask={this.state.listTask} complete={this.handleComplete}/>
            </div>
        )
    }

}

export default TodoList;