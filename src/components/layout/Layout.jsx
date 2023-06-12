import React, { Fragment, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";
import { IoApps, IoNotificationsSharp } from "react-icons/io5";
import Profile_Menu from "../Profile_Menu/Profile_Menu";
import { CiLogout } from "react-icons/ci";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { GiExitDoor } from "react-icons/gi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Outlet, useNavigate } from "react-router";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Radio, Space, Modal, Badge, Avatar } from "antd";
import { AiOutlineSearch, AiTwotoneSetting } from "react-icons/ai";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

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
            className="relative top-1 mb-2 px-5 py-3 text-gray-700
            bg-gradient-to-r from-blue-100 to-green-100 inset-0 mx-5 rounded-lg flex gap-4 items-center"
            aria-label="Breadcrumb"
          >
            {/* <Profile_Menu /> */}
            {/* <button className="bg-inherit text-red-700" onClick={showModal}>
              <CiLogout size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <TbLayoutSidebarRightCollapse size={25} className="text-gray-600 " />
            </button> */}
            {/* <Button
              className="bg-red-500 text-white"
                type=""
                icon={<CiLogout />}
                size="default"
              /> */}
            <button
              className=" text-red-400 border border-red-400 bg-white
                 p-1 rounded-md transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-200"
              onClick={showModal}
            >
              <GiExitDoor size={20} />
            </button>
            <button
              className=" text-blue-400 border border-blue-400 bg-white
                p-1 rounded-full transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-200"
              onClick={showModal}
            >
              <AiOutlineSearch size={20} />
            </button>
            <Badge
              count={5}
              className=" transition ease-in-out delay-150 hover:-translate-y-1
               hover:scale-110 duration-200 cursor-pointer"
            >
              <IoNotificationsSharp size={25} color="#ffbf00" />
            </Badge>

            <button
              className=" text-green-600 border border-green-600 bg-white
              p-1 rounded-md transition ease-in-out delay-150 
            hover:-translate-y-1 hover:scale-110 duration-200"
              onClick={showModal}
            >
              <SlEnvolopeLetter size={20} />
            </button>
            <button
              className="text-white
               bg-white border border-[#4f0fa8] p-1 rounded-full transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-200"
            >
              <AiTwotoneSetting color="#4f0fa8" size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <TbLayoutSidebarRightCollapse
                  size={29}
                  className=" text-gray-500 border border-gray-500 bg-white
                p-1 rounded-md transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-200"
                />
              ) : (
                <TbLayoutSidebarLeftCollapse
                  size={29}
                  className=" text-gray-500 border border-gray-500 bg-white
                p-1 rounded-md transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-200"
                />
              )}
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
              onClick={() => navigate("/")}
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
