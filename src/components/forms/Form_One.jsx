import React, { useState } from "react";
import { Button, Checkbox, Col, DatePicker, Form, Input, Row } from "antd";
import Text_Input from "../Inputs/Text_Input";
import Select_Input from "../Inputs/Select_Input";
import { Tabs } from "antd";
import TableUi from "../Tables/Table";
import Form_Section from "../Sections/Form_Section";
import { Segmented } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const items = [
  `چک`,
  `سفته`,
  `وجه نقد`,
  `اطلاعیه واریز`,
  `برگشت از واگذار به غیر`,
  `استرداد چک پرداختی`,
];

const Form_One = () => {
  const [input_size] = useState("small");
  return (
    <div>
      <div className="border-1 rounded-lg"></div>
      <Form
        layout="inline"
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        wrapperCol={
          {
            // span: 16,
          }
        }
        style={
          {
            // maxWidth: 600,
          }
        }
        initialValues={{
          remember: true,
          // size: input_size
        }}
        size={input_size}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form_Section>
          <span>مشخصات شما</span>
          <Select_Input
            label="مشخصات شما"
            name="name0"
            required={true}
            message="پر کردن فیلد الزامی است"
            className="w-1/2"
          />
          {/* <Text_Input
            label="مشخصات شما"
            name="name"
            required={true}
            message="پر کردن فیلد الزامی است"
          /> */}
        </Form_Section>
        <Form_Section>
          <div className=" grid grid-cols-3 gap-3 mt-2">
            <Text_Input
              label="شماره رسید"
              name="name1"
              required={true}
              message="پر کردن فیلد الزامی است"
            />
            <Select_Input
              label="نوع دریافت"
              name="name2"
              required={true}
              message="پر کردن فیلد الزامی است"
            />
            <Text_Input
              label="تحویل دهنده"
              name="name3"
              required={true}
              message="پر کردن فیلد الزامی است"
            />
            <Form.Item
              label={"تاریخ"}
              name="Date"
              rules={[
                {
                  required: true,
                  message: false,
                },
              ]}
            >
              <DatePicker className={"w-full"} />
            </Form.Item>
            <Select_Input
              label="بابت"
              name="name4"
              required={true}
              message="پر کردن فیلد الزامی است"
            />
            <Select_Input
              label="صندوق"
              name="name5"
              required={true}
              message="پر کردن فیلد الزامی است"
            />
            <Text_Input
              label="شماره فرمی"
              name="name6"
              required={true}
              message="پر کردن فیلد الزامی است"
            />
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <Text_Input
              label="شرح"
              name="name7"
              required={true}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />{" "}
            <Text_Input
              label="شرح به زبان دوم"
              name="name8"
              required={true}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
          </div>
        </Form_Section>
        <Form_Section>
          <Segmented options={items} />
          {/* <Tabs defaultActiveKey="1" items={items} onChange={() => {}} /> */}
          <div>
            <TableUi />
          </div>
        </Form_Section>
        <Form_Section>
          <Select_Input
            label="ارز"
            name="name10"
            required={false}
            // message="پر کردن فیلد الزامی است"
          />
          <div className=" grid grid-cols-3 gap-3 mt-2">
            <Text_Input
              label="چک"
              name="name11"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="اطلاعیه واریز1"
              name="name12"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="استرداد چک پرداختی"
              name="name13"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="سفته"
              name="name14"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="برگشت از واگذار به غیر"
              name="name15"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="استردا سفته پرداختی"
              name="name16"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="وجه نقد"
              name="name17"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
            <Text_Input
              label="جمع مبالغ"
              name="name18"
              required={false}
              message="پر کردن فیلد الزامی است"
              className="w-full"
            />
          </div>
        </Form_Section>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" size={"middle"} htmlType="submit">
            Primary
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form_One;
