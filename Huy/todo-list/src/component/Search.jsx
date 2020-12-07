import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    onChangeSearchValue = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmitSearch = (event) => {
        event.preventDefault();
        this.props.searchTask(this.state.searchValue);
    }

    handleClickBackSearch = () => {
        this.props.back();
        this.setState({
            searchValue: ''
        })
    }

    render() {
        return(
            <div className="search-container mt-3">
                <form className="form-inline" onSubmit={this.handleSubmitSearch}>
                    <div className="form-group mx-sm-3 ml-3">
                        <input type="text" 
                        className="form-control form-control-sm" 
                        name="sreachTask" 
                        placeholder="Search Task"
                        value={this.state.searchValue}
                        onChange={this.onChangeSearchValue}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Search</button>
                    <button type="button" 
                    className="btn btn-primary btn-sm ml-2"
                    onClick={this.handleClickBackSearch}>Back</button>
                </form>
            </div>
        )
    }
}

export default Search;