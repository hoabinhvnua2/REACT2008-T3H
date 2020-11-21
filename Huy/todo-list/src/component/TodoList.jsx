import React, { Component } from 'react';
import ShowList from './ShowList';
import './component.scss';
import Form from './Form';
import Search from './Search';

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
        let listTask = this.state.listTask;
        let listAdd = listTask.concat(task);
        localStorage.setItem('list-task', JSON.stringify(listAdd));
        this.setState({
            listTask: listAdd
        });
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
        localStorage.setItem('list-task', JSON.stringify(listCheckComplete));
        this.setState({
            listTask: listCheckComplete
        })
    }

    handleDeleteTask = (index) => {
        let listTask = this.state.listTask;
        let listDelete = [...listTask.slice(0, index), ...listTask.slice(index + 1)];
        localStorage.setItem('list-task', JSON.stringify(listDelete));
        this.setState({
            listTask: listDelete
        })
    }

    handleSearchTask = (value) => {
        let listTask = this.state.listTask;
        let listSearch = listTask.filter( (item) => {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
        this.setState({
            listTask: listSearch
        })
    }

    handleBack = () => {
        let listBack = JSON.parse(localStorage.getItem('list-task'));
        this.setState({
            listTask: listBack
        })
    }

    render() {
        return(
            <div className="todo-container">
                <Form addList={this.handleAddList} />
                <Search searchTask={this.handleSearchTask} back={this.handleBack}/>
                <ShowList listTask={this.state.listTask} 
                complete={this.handleComplete}
                deleteTask={this.handleDeleteTask}/>
            </div>
        )
    }

}

export default TodoList;