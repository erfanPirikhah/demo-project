import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import {
  BsChevronDown,
  BsMusicNoteBeamed,
  BsChatText,
  BsCircleFill,
} from "react-icons/bs";
import { BiDrink } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTabs, useTabsAction } from "../../context/TabProviders";
import Form_Two from "../forms/Form_Two";
import { sideBars } from "./listSideBar";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";

function getItem(label, key, icon, children, component) {
  return {
    key,
    icon,
    children,
    label,
    component,
  };
}
const items = [
  getItem("صفحه اول", "sub1", <MailOutlined />, [
    getItem("Option 1", "1", "&", "", <Form_Two />),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("صفحه دوم", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("صفحه سوم", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];
const Sidbar = (props) => {
  const dispatch = useTabsAction();
  const ref = useRef(null);
  const { isOpen, setIsOpen } = props;

  return (
    <div
      className={`w-60 ${
        isOpen ? "" : "translate-x-60"
      } fixed right-0 transition transform ease-in-out duration-1000 z-50 flex h-screen bg-white flex flex-col overflow-y-auto  rounded-l-3xl`}
    >
      {/* className={`sticky top-0  h-screen  flex flex-col w-80 bg-white rounded-l-3xl overflow-y-auto
       transition transform ease-in-out duration-1000 ${isOpen ? "" : "translate-x-72"}`} */}

      <div className="flex justify-between items-center  px-5 h-20 shadow-md">
        <button className="text-gray-500" onClick={() => setIsOpen(false)}>
          <IoClose size={20} />
        </button>
        <h1 className="text-xl uppercase text-indigo-500">logo</h1>
      </div>
      {/* <Menu
        theme="light"
        onClick={onClick}
        style={{
          width: 256,
        }}
        // defaultOpenKeys={["sub1"]}
        // selectedKeys={[current]}
        mode="inline"
        items={items}
      /> */}
      <ul className="flex flex-col py-4">
        {sideBars.map((sideBar) => {
          return (
            <li>
              <div className="w-full px-2 ">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-between rounded-lg py-2 px-3  text-left text-xs font-medium text-gray-500 hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-900 hover:bg-indigo-100 ${
                            open ? "bg-indigo-100" : ""
                          }`}
                        >
                          <BsChevronDown
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-4 w-4 text-gray-500`}
                          />
                          <div className="flex justify-between items-center gap-4">
                            <span>{sideBar.name} </span>
                            {sideBar.icon}
                          </div>
                        </Disclosure.Button>
                        <Transition
                          ref={ref}
                          show={open}
                          beforeEnter={() => {
                            ref.current &&
                              ref.current.style.setProperty(
                                `max-height`,
                                `${ref.current.scrollHeight}px`
                              );
                          }}
                          beforeLeave={() => {
                            ref.current &&
                              ref.current.style.setProperty(
                                `max-height`,
                                `0px`
                              );
                          }}
                          className="transition-all duration-300"
                          enterFrom="transform opacity-0 max-h-[0px]"
                          enterTo="transform opacity-100"
                          leaveFrom="transform opacity-50"
                          leaveTo="transform opacity-0"
                        >
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-xs text-gray-500">
                            {sideBar.sub.map((sub) => {
                              return (
                                <div
                                  className="w-full px-2 cursor-pointer"
                                  onClick={() =>
                                    dispatch({
                                      type: "addTab",
                                      value: sub.component,
                                    })
                                  }
                                >
                                  <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                                    <div className="flex w-full justify-end rounded-lg py-2 text-left text-xs font-medium text-gray-500 hover:translate-x-2 transition-transform ease-in duration-200 hover:text-gray-900">
                                      <div className="flex justify-between items-center gap-4 ">
                                        <span>{sub.name}</span>
                                        <BsCircleFill
                                          size={6}
                                          className=" text-gray-400"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidbar;
