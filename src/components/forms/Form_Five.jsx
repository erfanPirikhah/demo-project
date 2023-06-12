import { Form, Input, Table, Button, Space, Radio } from "antd";
import CostumeTable from "../Tables/costumeTable";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SearchOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import ReactDragListView from "react-drag-listview";
import { Select } from "antd";

const Form_Five = ({ children, ...props }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [size, setSize] = useState("large");

  const handle_change_gender = (value, id) => {
    console.log(`selected ${value}`);

    let data = dataSource.find((i) => i.key == id);
    let filterData = dataSource.filter((i) => i.key !== id);
    console.log(data);
    console.log(filterData);
    data.gender = value;
    console.log(data);
    filterData.push(data);
    setDataSource(filterData);
    // dataSource[id] = data
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

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
            className="bg-blue-500"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          {/* <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button> */}
          {/* <Button
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
          </Button> */}
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

  const getColumnSelectSearchProps = (dataIndex) => ({
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
        <Select
          // ref={searchInput}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={genderOptions}
        />
        {/* <Input
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
        /> */}
        <Space>
          <Button
            type="primary"
            className="bg-blue-500"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          {/* <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button> */}
          {/* <Button
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
          </Button> */}
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

  const [columns, setColumns] = useState([
    {
      key: "sort",
    },
    {
      title: "نام",
      dataIndex: "name",
      status: true,
    },
    {
      title: "نام خانوادگی",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
      // width: "30%",
      ...getColumnSearchProps("chinese"),
      status: false,
    },
    {
      title: "جنسیت",
      dataIndex: "gender",
      sorter: {
        compare: (a, b) => a.gender - b.gender,
        multiple: 2,
      },
      ...getColumnSelectSearchProps("gender"),
      render: (gender, item) => {
        const index = item.key;
        return (
          <Select
            value={gender}
            style={{
              width: "80%",
            }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(e) => handle_change_gender(e, index)}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={genderOptions}
          />
        );
      },
      // width: "30%",
      status: true,
    },
    {
      title: "ارز",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      // width: "30%",
      ...getColumnSearchProps("english"),
      status: true,
    },
    {
      title: "نرخ ارز",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      // width: "30%",
      ...getColumnSearchProps("english"),
      status: true,
    },
    {
      title: "مالیات",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
      // width: "30%",
      ...getColumnSearchProps("english"),
      status: true,
    },
  ]);

  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      gender: "man",
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      gender: "women",
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      gender: "man",
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 31,
      gender: "women",
      english: 41,
    },
    {
      key: "5",
      name: "joe Red",
      chinese: 62,
      gender: "man",
      english: 65,
    },
    {
      key: "6",
      name: "john parker",
      chinese: 64,
      gender: "women",
      english: 12,
    },
    {
      key: "7",
      name: "diana Red",
      chinese: 88,
      gender: "women",
      english: 54,
    },
    {
      key: "8",
      name: "Jim Red",
      chinese: 87,
      gender: "man",
      english: 89,
    },
    {
      key: "9",
      name: "leo messi",
      chinese: 54,
      gender: "women",
      english: 87,
    },
    {
      key: "10",
      name: "Joe Black",
      chinese: 12,
      gender: "man",
      english: 90,
    },
  ]);

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const columnsCopy = [...columns];
      const item = columnsCopy.splice(fromIndex, 1)[0];
      columnsCopy.splice(toIndex, 0, item);
      setColumns(columnsCopy);
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
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
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
      </DndContext>
    </Form>
  );
};

export default Form_Five;

const genderOptions = [
  {
    value: "man",
    label: "مرد",
  },
  {
    value: "women",
    label: "زن",
  },
];
