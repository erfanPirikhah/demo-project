import { DatePicker, Form, Input, Table, Button, Space, Radio } from "antd";
import costumeTable from "../Tables/costumeTable";
import CostumeTable from "../Tables/costumeTable";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
// import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SearchOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import ReactDragListView from "react-drag-listview";
// const ReactDragListView = window["react-drag-listview"];
// const ReactDragListView = require('react-drag-listview');

const Form_Five = ({ children, ...props }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [size, setSize] = useState("large");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  //   // const columns = [
  //   //   {
  //   //     key: "sort",
  //   //   },
  //   //   {
  //   //     title: "Name",
  //   //     dataIndex: "name",
  //   //   },
  //   //   {
  //   //     title: "Chinese Score",
  //   //     dataIndex: "chinese",
  //   //     sorter: {
  //   //       compare: (a, b) => a.chinese - b.chinese,
  //   //       multiple: 3,
  //   //     },
  //   //     width: "30%",
  //   //     ...getColumnSearchProps("chinese"),
  //   //   },
  //   //   {
  //   //     title: "Math Score",
  //   //     dataIndex: "math",
  //   //     sorter: {
  //   //       compare: (a, b) => a.math - b.math,
  //   //       multiple: 2,
  //   //     },
  //   //     width: "30%",
  //   //     ...getColumnSearchProps("math"),
  //   //   },
  //   //   {
  //   //     title: "English Score",
  //   //     dataIndex: "english",
  //   //     sorter: {
  //   //       compare: (a, b) => a.english - b.english,
  //   //       multiple: 1,
  //   //     },
  //   //     width: "30%",
  //   //     ...getColumnSearchProps("english"),
  //   //   },
  //   // ];

  const [columns, setColumns] = useState([
    {
      key: "sort",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
      width: "30%",
      ...getColumnSearchProps("chinese"),
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
      width: "30%",
      ...getColumnSearchProps("math"),
    },
    {
      title: "English Score",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      width: "30%",
      ...getColumnSearchProps("english"),
    },
  ]);

  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    ,
  ]);

  // const onDragEnd = ({ active, over }) => {
  //   if (active.id !== over?.id) {
  //     setDataSource((previous) => {
  //       const activeIndex = previous.findIndex((i) => i.key === active.id);
  //       const overIndex = previous.findIndex((i) => i.key === over?.id);
  //       return arrayMove(previous, activeIndex, overIndex);
  //     });
  //   }
  // };

  //   const dragProps = {
  //     onDragEnd(fromIndex, toIndex) {
  //       const new_columns = [...columns];
  //       const item = new_columns.splice(fromIndex, 1)[0];
  //       new_columns.splice(toIndex, 0, item);
  //       setColumns({
  //         new_columns,
  //       });
  //     },
  //     nodeSelector: "th",
  //   };
  // const onDragEndColumns = (fromIndex, toIndex) => {

  // }

  // const onDragEnd = (fromIndex, toIndex) => {
  //   const columnsCopy = [...columns];
  //   const item = columnsCopy.splice(fromIndex, 1)[0];
  //   columnsCopy.splice(toIndex, 0, item);
  //   setColumns({ columnsCopy });
  // };

  // const dragProps = {
  //   onDragEnd,
  //   nodeSelector: "th",
  // };

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const columnsCopy = [...columns];
      const item = columnsCopy.splice(fromIndex, 1)[0];
      columnsCopy.splice(toIndex, 0, item);
      setColumns({
        columnsCopy,
      });
    },
    nodeSelector: "th",
  };
  return (
    <Form>
      <Form.Item label="Size">
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {/* <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}> */}
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <ReactDragListView.DragColumn {...dragProps}>
          <Table
            components={{
              body: {
                row: CostumeTable,
              },
            }}
            bordered
            size={size}
            rowKey="key"
            columns={columns}
            dataSource={dataSource}
          />
        </ReactDragListView.DragColumn>
      </SortableContext>
      {/* </DndContext> */}
    </Form>
  );
};

export default Form_Five;

// import React from 'react';
// import { DatePicker, Form, Input, Table, Button, Space, Radio } from "antd";
// import ReactDragListView from "react-drag-listview";
// // https://github.com/raisezhang/react-drag-listview
// // const ReactDragListView = window["react-drag-listview"];

// class Demo extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: [
//                 {
//                     key: "1",
//                     name: "Boran",
//                     gender: "male",
//                     age: "12",
//                     address: "New York"
//                 },
//                 {
//                     key: "2",
//                     name: "JayChou",
//                     gender: "male",
//                     age: "38",
//                     address: "TaiWan"
//                 },
//                 {
//                     key: "3",
//                     name: "Lee",
//                     gender: "female",
//                     age: "22",
//                     address: "BeiJing"
//                 },
//                 {
//                     key: "4",
//                     name: "ChouTan",
//                     gender: "male",
//                     age: "31",
//                     address: "HangZhou"
//                 },
//                 {
//                     key: "5",
//                     name: "AiTing",
//                     gender: "female",
//                     age: "22",
//                     address: "Xi’An"
//                 }
//             ],
//             columns: [
//                 {
//                     title: "Key",
//                     dataIndex: "key"
//                 },
//                 {
//                     title: "Name",
//                     dataIndex: "name"
//                 },
//                 {
//                     title: "Gender",
//                     dataIndex: "gender"
//                 },
//                 {
//                     title: "Age",
//                     dataIndex: "age"
//                 },
//                 {
//                     title: "Address",
//                     dataIndex: "address"
//                 }
//             ]
//         };

//         const that = this;
//         this.dragProps = {
//             onDragEnd(fromIndex, toIndex) {
//                 const columns = [...that.state.columns];
//                 const item = columns.splice(fromIndex, 1)[0];
//                 columns.splice(toIndex, 0, item);
//                 that.setState({
//                     columns
//                 });
//             },
//             nodeSelector: "th"
//         };
//     }

//     render() {
//         return (
//             <div style={{ margin: 20 }}>

//                 <ReactDragListView.DragColumn {...this.dragProps}>
//                     <Table
//                         columns={this.state.columns}
//                         pagination={false}
//                         dataSource={this.state.data}
//                         bordered
//                     />
//                 </ReactDragListView.DragColumn>
//             </div>
//         );
//     }
// }

// export default Demo
