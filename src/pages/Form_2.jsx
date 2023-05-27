import { Tabs } from 'antd';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import React, { useEffect, useRef, useState } from 'react';
import {
    SortableContext,
    arrayMove,
    horizontalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/css';
const initialItems = [
    {
        label: 'Tab 1',
        children: 'Content of Tab 1',
        key: '1',
    },
    {
        label: 'Tab 2',
        children: 'Content of Tab 2',
        key: '2',
    },
    {
        label: 'Tab 3',
        children: 'Content of Tab 3',
        key: '3',
        closable: false,
    },
];

const DraggableTabNode = ({ className, onActiveBarTransform, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isSorting } = useSortable({
        id: props['data-node-key'],
    });
    const style = {
        ...props.style,
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: 'move',
    };
    useEffect(() => {
        if (!isSorting) {
            onActiveBarTransform('');
        } else if (className?.includes('ant-tabs-tab-active')) {
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
const Form_2 = () => {
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
            label: 'New Tab',
            children: 'Content of new Tab',
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
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    const [className, setClassName] = useState('');
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
        <div style={{ direction: "rtl" }}>

            <Tabs
                type="editable-card"
                onChange={onChange}
                activeKey={activeKey}
                onEdit={onEdit}
                items={items}
                renderTabBar={(tabBarProps, DefaultTabBar) => (
                    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
                        <SortableContext items={items.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
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
            /> </div>
    );
};
export default Form_2;