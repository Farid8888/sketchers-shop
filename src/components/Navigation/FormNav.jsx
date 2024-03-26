import React from "react";
import {ConfigProvider,Form,Input,Flex} from 'antd'
import {SearchOutlined,CloseOutlined} from '@ant-design/icons'

const FormNav = () => {
    const [form] = Form.useForm();
    const [data, setData] = React.useState({ name: "" });
    const [touch, setTouch] = React.useState(false);
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorTextPlaceholder: `${!data.name && touch && "red"}`,
          },
        },
      }}
    >
      <Form form={form} layout="inline">
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Input
            className="wd"
            placeholder="Название запроса"
            onChange={(e) => {
              setData({ name: e.target.value });
              setTouch(true);
            }}
            suffix={
              <Flex>
                <CloseOutlined className="sz icnpr"/>
                <SearchOutlined
                  className="sz icnpr lf"
                  type="submit"
                />
              </Flex>
            }
            required
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default FormNav;
