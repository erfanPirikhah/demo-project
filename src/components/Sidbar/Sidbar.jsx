import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
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
const Sidbar = (props) => {
  const dispatch = useTabsAction();

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
                                    {/* <BsChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                          } h-4 w-4 text-gray-500`}
                                      /> */}
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
