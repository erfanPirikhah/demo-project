import React, { Fragment, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";
import { IoApps } from "react-icons/io5";
import Profile_Menu from "../Profile_Menu/Profile_Menu";
import { Button, Modal } from "antd";
import { CiLogout } from "react-icons/ci";
import { Outlet } from "react-router";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="min-h-screen flex flex-row overflow-x-hidden bg-gray-50">
        <div
          // className={`flex flex-col w-full ${isOpen ? "" : ""
          //   } `}
          className={`content ${
            isOpen ? " md:mr-60" : ""
          }  transform ease-in-out duration-500 px-2 flex flex-col w-full`}
        >
          <nav
            className="sticky top-0 flex gap-3 items-center px-5 py-3 text-gray-700  bg-gray-50 dark:bg-[#1E293B] "
            aria-label="Breadcrumb"
          >
            {/* <Profile_Menu /> */}
            <button className="bg-inherit text-red-700" onClick={showModal}>
              <CiLogout size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoApps size={25} className="text-gray-600 " />
            </button>
          </nav>

          <div className="w-full ">{<Outlet />}</div>
        </div>
        <Sidbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <Modal
        title="آیا مایل به خروج هستید؟"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-end mt-5">
            <button
              onClick={handleCancel}
              className="text-red-500 px-4 py-1 rounded-lg"
            >
              خیر
            </button>
            <button
              onClick={handleCancel}
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-white duration-200 px-4 py-1 rounded-lg"
            >
              بله
            </button>
          </div>
        }
      ></Modal>
    </>
  );
};

export default Layout;
