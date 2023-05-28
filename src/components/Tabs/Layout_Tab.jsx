import { Tabs } from "antd";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import React, { useEffect, useRef, useState } from "react";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { css } from "@emotion/css";
import Form_One from "../forms/Form_One";
import Form_Two from "../forms/Form_Two";
import Report from "../Report/Report";
import Form_Three from "../forms/Form_Three";
import Form_Four from "../forms/Form_Four";

const initialItems = [
  {
    label: "تب شماره یک",
    children: <Form_One />,
    key: "1",
  },
  {
    label: "تب شماره دو",
    children: <Form_Two />,
    key: "2",
  },
  {
    label: "تب شماره سه",
    children: <Report />,
    key: "3",
    // closable:true,
  },
  {
    label: "تب شماره چهار",
    children: <Form_Three />,
    key: "4",
    // closable: false,
  },
  {
    label: "تب شماره پنج",
    children: <Form_Four />,
    key: "5",
    // closable: false,
  },
  {
    label: "تب شماره شش",
    children: "Content of Tab 3",
    key: "6",
    // closable: false,
  },
];

const DraggableTabNode = ({ className, onActiveBarTransform, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
  } = useSortable({
    id: props["data-node-key"],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "move",
  };
  useEffect(() => {
    if (!isSorting) {
      onActiveBarTransform("");
    } else if (className?.includes("ant-tabs-tab-active")) {
      onActiveBarTransform(css`
        .ant-tabs-ink-bar {
          transform: ${CSS.Transform.toString(transform)};
          transition: ${transition} !important;
        }
      `);
    }
  }, [className, isSorting, transform]);
  return React.cloneElement(props.children, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};
const Layout_Tab = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: "New Tab",
      children: "Content of new Tab",
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  const [className, setClassName] = useState("");
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  return (
    <div>
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
        renderTabBar={(tabBarProps, DefaultTabBar) => (
          <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
            <SortableContext
              items={items.map((i) => i.key)}
              strategy={horizontalListSortingStrategy}
            >
              <DefaultTabBar {...tabBarProps}>
                {(node) => (
                  <DraggableTabNode
                    {...node.props}
                    key={node.key}
                    onActiveBarTransform={setClassName}
                  >
                    {node}
                  </DraggableTabNode>
                )}
              </DefaultTabBar>
            </SortableContext>
          </DndContext>
        )}
      />{" "}
    </div>
  );
};
export default Layout_Tab;
