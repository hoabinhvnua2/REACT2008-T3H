import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    const { task } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Task Name</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {task &&
            task.map((items, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{items.taskName}</td>
                <td>{items.description}</td>
                <td>
                  <span
                    className={
                      items.status
                        ? "badge badge-primary"
                        : "badge badge-danger"
                    }
                  >
                    {items.status ? "Active" : "Deactive"}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default TodoList;
