import React, { Component } from "react";
import "./App.scss";
import FormRegister from "./component/form";
// import Colors from "./component/color";
// import FormRegister from "./component/form";
// import Result from "./component/result";
import TodoList from "./component/todo-list";
const TASK = [
  {
    taskName: 'Học React js',
    description: 'Hôm nay học component',
    status: true
  },
  {
    taskName: 'Học Angular',
    description: 'Hôm nay học two way binding',
    status: false
  }
];

//  bài tập
// nhập dữ liệu vào form tạo task trên modal, sau đó show task ra danh sách task và đóng modal
// khi refresh lại trang thì ko bị mất dữ liệu vừa nhập
// khi trạng của task đang là active thì click vào sẽ chuyển thành deactive và ngược lại
// tạo ô input search và điều kiện search theo taskName
// Tạo sort cho cột task name

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorText: "red",
      show: false,
      task: TASK
    };
  }

  // để truyền được data từ cha sang con thì cần sử dụng props
  // làm sao để thằng con truyền data ra cho cha thì vần props. ở đây sẽ dùng function

  onChangeColor = (color) => {
    this.setState({
      colorText: color,
    });
  };

  myStyle = () => {
    if (this.state.show) {
      return {
        display: 'block'
      }
    } else {
      return {
        display: 'none'
      }
    }
  }

  handleClickShowModal = (close) => {
    console.log(close);
    if (close === 'close') {
      this.setState({
        show: false
      });
    } else {
      this.setState({
        show: true
      })
    }    
  }

  collectionValue = (value) => {
    console.log(value);
  }


  render() {
    return (
      <div className="container">
        {/* props là chúng dùng để truyền data từ cha vào con */}
        {/* <Colors color={this.state.colorText} receive={this.onChangeColor}/>
        <Result color={this.state.colorText} />

        <FormRegister /> */}
        <button
          type="button"
          className="btn btn-primary mb-2"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => {this.handleClickShowModal('a')}}
        >
          Add task
        </button>
        <TodoList task={this.state.task}/>

        <div className="modal" role="dialog" style={this.myStyle()}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {this.handleClickShowModal('close')}}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <FormRegister getValue={this.collectionValue}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
