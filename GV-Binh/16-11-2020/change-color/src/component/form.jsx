import React, { Component } from "react";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      description: "",
      status: false,
    };

   
  }

  handleChange = (event) => {
    // cách 1
    // const userName = event.target.value;
    // this.setState({
    //     userName
    // })

    // cách 2
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

   
  };

  handleChangeCheckbox = (event) => {
    this.setState({
      checkRemember: !this.state.checkRemember,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.props.getValue(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="taskName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control form-control-sm"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <select className="form-conttrol form-control-sm" name="status" >
              <option value={true}>Đang hoạt động</option>
              <option value={false}>Đã tắt</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default FormRegister;
