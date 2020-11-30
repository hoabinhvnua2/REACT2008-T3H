import React, { Component } from "react";
import {
  Layout,
  Menu,
  Button,
  Table,
  Modal,
  Space,
  Badge,
  Popconfirm,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TaskForm from "../component/task-form";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import "./layout.scss";

const { Header, Sider, Content } = Layout;

// const data = [
//   {
//     key: "1",
//     task: "John Brown",
//     status: 32,
//     descript: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     task: "Jim Green",
//     status: 42,
//     descript: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     task: "Joe Black",
//     status: 32,
//     descript: "Sidney No. 1 Lake Park",
//   },
// ];

const data = JSON.parse(localStorage.getItem("tasks"));

class SiderDemo extends Component {
  state = {
    collapsed: false,
    sortedInfo: null,
    filteredInfo: null,
    visible: false,
    data,
    editForm: null,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onChange = (pagination, filters, sorter, extra) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  showModal = (resource) => {
    this.setState({
      visible: true,
      editForm: resource,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  getValueForm = (value) => {
    const { data } = this.state;
    if (value.key) {
      const index = _.findIndex(data, (resource) => {
        return resource.key === value.key;
      });
      data[index] = value;
    } else {
      value.key = uuidv4();
      data.push(value);
    }
    this.setState({
      data,
    });
    this.handleOk();
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  myStyle = (value) => {
    if (value === "active") {
      return {
        backgroundColor: "#52c41a",
      };
    } else {
      return 0;
    }
  };

  confirm = (id) => {
    const { data } = this.state;
    const index = _.findIndex(data, (resource) => {
      return resource.key === id;
    });
    data[index].status =
      data[index].status === "active" ? "deactive" : "active";

    this.setState({
      data,
    });
    localStorage.setItem("tasks", JSON.stringify(data));
  };
  cancel = () => {
    console.log("không thay đổi trạng thái");
  };

  onDelete = (value) => {
    console.log(value);

    const {data} = this.state;

    const newArray = _.remove(data, (v) => {
      return v.key !== value;
    });
    console.log(newArray);
    this.setState({
      data: newArray
    });
    localStorage.setItem("tasks", JSON.stringify(newArray));
  };

  render() {
    let { sortedInfo, filteredInfo, data, editForm } = this.state;
    sortedInfo = sortedInfo || {};
    const columns = [
      {
        title: "Tên công việc",
        dataIndex: "task",
        key: "task",
        filters: [
          { text: "Joe", value: "Joe" },
          { text: "Jim", value: "Jim" },
        ],
        filteredValue: filteredInfo?.task || null,
        onFilter: (value, record) => record.task.includes(value),
        sorter: (a, b) => a.task.length - b.task.length,
        sortOrder: sortedInfo.columnKey === "task" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        render: (text, value) => (
          <Popconfirm
            onConfirm={() => {
              this.confirm(value.key);
            }}
            onCancel={this.cancel}
            title="Bạn có chắc chắn muốn cập nhật trạng thái không？"
            okText="Đồng ý"
            cancelText="Không"
          >
            <Badge
              className="site-badge-count-109"
              count={text === "active" ? "Hoạt động" : "Tạm dừng"}
              style={this.myStyle(text)}
            />
          </Popconfirm>
        ),
      },
      {
        title: "Mô tả",
        dataIndex: "descript",
        key: "descript",
      },
      {
        title: "Tác vụ",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => {
                this.showModal(record);
              }}
            />
            <Popconfirm
              onConfirm={() => {
                this.onDelete(record.key);
              }}
              onCancel={this.cancel}
              title="Bạn có chắc chắn muốn xóa công việc không？"
              okText="Đồng ý"
              cancelText="Không"
            >
              <Button
                type="danger"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        ),
      },
    ];

    return (
      <Layout className="full-heigth">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Button
              type="primary"
              onClick={() => {
                this.showModal(false);
              }}
            >
              Thêm mới
            </Button>

            <Table
              columns={columns}
              dataSource={data}
              onChange={this.onChange}
            />
            <Modal
              title={
                editForm?.key ? "Cập nhật công việc" : "Thêm mới công việc"
              }
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <TaskForm getForm={this.getValueForm} data={editForm} />
            </Modal>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

// làm nốt phần edit và delete
// đọc trước redux và react-redux
