import React, { Fragment, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";
import { IoApps } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import {AiOutlineSetting} from "react-icons/ai"
import {IoNotificationsOutline} from "react-icons/io5"
import {CiLogout, CiEdit} from "react-icons/ci"
import { Menu, Transition } from '@headlessui/react'

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="min-h-screen flex flex-row overflow-x-hidden bg-gray-50">
        <div
          // className={`flex flex-col w-full ${isOpen ? "" : ""
          //   } `}
          className={`content ${isOpen ? " md:mr-60" : ""
            }  transform ease-in-out duration-500 px-2 flex flex-col w-full`}
        >
          <nav
            className="sticky top-0 flex gap-3 items-center px-5 py-3 text-gray-700  bg-gray-50 dark:bg-[#1E293B] "
            aria-label="Breadcrumb"
          >
            <div className="text-left">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-gray-600  font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <FaUser size={20} />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                              } group flex gap-2 w-full items-center rounded-md px-2 py-2 `}
                          >
                            {active ? (
                              <CiEdit sizze={25} />
                            ) : (
                              <CiEdit sizze={25} />
                            )}
                            Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                              } group flex gap-2 w-full items-center rounded-md px-2 py-2 `}
                          >
                            {active ? (
                             <AiOutlineSetting sizze={25} />
                            ) : (
                             <AiOutlineSetting sizze={25} />
                            )}
                            Setting
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                              } group flex gap-2 w-full items-center rounded-md px-2 py-2 `}
                          >
                            {active ? (
                            <IoNotificationsOutline sizze={25} />
                            ) : (
                             <IoNotificationsOutline sizze={25} />
                            )}
                            Notification
                          </button>
                        )}
                      </Menu.Item>

                    </div>

                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-violet-500 text-white' : 'text-black'
                              } group flex gap-2 w-full items-center rounded-md px-2 py-2 `}
                          >
                            {active ? (
                             <CiLogout sizze={25} />
                            ) : (
                             <CiLogout sizze={25} />
                            )}
                            Log Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}><IoApps size={25} className="text-gray-600 " /></button>
          </nav>
          <div className="w-full ">{props.children}</div>
        </div>
        <Sidbar isOpen={isOpen}
          setIsOpen={setIsOpen} />

      </div>










    </>
  );
};

export default Layout;
