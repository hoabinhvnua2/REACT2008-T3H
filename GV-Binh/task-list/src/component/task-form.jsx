import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, Spin } from "antd";
import { CartContext } from "./cart-product";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const TaskForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();


  useEffect(() => {
    const {task, status, descript} = props.data;
    form.setFieldsValue({
      task,
      status,
      descript
    })
  }, [props.data]);

  const onFinish = (values) => {
    values.key = props.data.key;
    setLoading(true);
    setTimeout(() => {
      props.getForm(values);
      success();
      onReset();
      setLoading(false);
    }, 3000);
  };

  const onReset = () => {
    form.resetFields();
  };

  const success = () => {
    message.success("Thêm dữ liệu thành công");
  };

  return (
    <Spin size="large" spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="task"
          label="Tên công việc"
          rules={[
            {
              required: true,
              message: "Tên công việc không được để trống",
            },
          ]}
        >
          <Input placeholder="Nhập tên công việc" />
        </Form.Item>
        <Form.Item
          name="status"
          label="Trạng thái"
          rules={[
            {
              required: true,
              message: "Chưa chọn trạng thái",
            },
          ]}
        >
          <Select placeholder="Chọn trạng thái">
            <Option value="active">Hoạt động</Option>
            <Option value="deactive">Tạm dừng</Option>
          </Select>
        </Form.Item>
        <Form.Item name="descript" label="Mô tả">
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {props.data?.key ? 'Cập nhật' : 'Lưu lại'}
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default TaskForm;
