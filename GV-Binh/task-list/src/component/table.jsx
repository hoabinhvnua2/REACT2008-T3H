import React, { Component } from "react";
import Common from './common'


class Table extends Component {
  constructor(props) {
    // mọi người tìm hiểu thêm về hàm super
    super(props);

    // chúng ta dùng state để quản lý sự thay đổi của chính nó
    this.state = {
    //   count: 0,
    };

    // console.log(this.props);
  }


//   handleClickCong = () => {
//       this.setState({
//           count: this.state.count + 1
//       });
//   }

//   handleClickTru = () => {
//     this.setState({
//         count: this.state.count - 1
//     });
//   }

  render() {
    const { ten, ho, age } = this.props.nameCol;
    return (
      <div>
        <Common />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Họ</th>
              <th scope="col">Tuổi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{ten}</td>
              <td>{ho}</td>
              <td>{age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;


