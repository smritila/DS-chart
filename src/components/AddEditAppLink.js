import { Form, Input } from "antd";
import { DatePicker, Space } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Form
    name="applink details"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="App Link"
      name="applink"
      rules={[
        {
          required: true,
          message: "Please input your App Link",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Date"
      name="date"
      rules={[
        {
          required: true,
          message: "Please input your Date",
        },
      ]}
    >
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </Form.Item>
  </Form>
);
export default App;
