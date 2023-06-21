import React, { useState } from "react";
import { Table, Input } from "antd";
// import 'antd/dist/antd.css';

const { Search } = Input;

const columns = [
  {
    title: (
      <div className="flex flex-col items-center gap-2 w-full">
        <Input
          // style={{ width: 200 }}
          size="small"
          className="w-full p-1 bg-white border border-gray-200"
          placeholder="Search ID"
          // allowClear
          // enterButton="Search"
          onSearch={(value) => console.log(value)}
        />

        <div className="w-full text-center border-t border-gray-600 pt-1">
          ID
        </div>
      </div>
    ),
    dataIndex: "id",
    key: "id",
    width: "20%",
  },
  {
    title: (
      <div className="flex flex-col items-center gap-1">
        <Search
          style={{ width: 150 }}
          placeholder="Search Name"
          allowClear
          // enterButton="Search"
          onSearch={(value) => console.log(value)}
        />

        <span>Name</span>
      </div>
    ),
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: (
      <Search
        style={{ width: 150 }}
        placeholder="Search Age"
        allowClear
        enterButton="Search"
        onSearch={(value) => console.log(value)}
      />
    ),
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: (
      <Search
        style={{ width: 150 }}
        placeholder="Search Email"
        allowClear
        enterButton="Search"
        onSearch={(value) => console.log(value)}
      />
    ),
    dataIndex: "email",
    key: "email",
    width: "40%",
  },
];

const data = [
  {
    key: "1",
    id: "1",
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
  {
    key: "2",
    id: "2",
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
  },
  {
    key: "3",
    id: "3",
    name: "Mark Smith",
    age: 40,
    email: "mark.smith@example.com",
  },
];

const Form_Five = () => {
  const [filteredInfo, setFilteredInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Filters:", filters);
    setFilteredInfo(filters);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={handleChange}
      pagination={{ pageSize: 5 }}
      bordered
    />
  );
};

export default Form_Five;
